package com.marcio.fatec.les_ecommerce.service.serviceImpl;

import com.marcio.fatec.les_ecommerce.DTO.OrderDTO;
import com.marcio.fatec.les_ecommerce.domain.*;
import com.marcio.fatec.les_ecommerce.repository.*;
import com.marcio.fatec.les_ecommerce.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImp implements IOrderService {


    @Autowired
    ClientRepository clientRepository;

    @Autowired
    AddresRepository addresRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    CartRepository cartRepository;

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    CouponRepository couponRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ExchangeCouponRepository exchangeCouponRepository;

    @Override
    public Order order(OrderDTO orderDTO) {

        Order order = new Order(orderDTO);

        Optional<Client> client = clientRepository.findById(orderDTO.getClientId());

        Optional<Address> deliveryAddres = addresRepository.findById(orderDTO.getAddressEntrega());
        Optional<Address> billingAddres = addresRepository.findById(orderDTO.getAddressCobranca());

        Optional<Cart> cart = cartRepository.findByClient(client.get());

        List<ItemOrder> items = itemRepository.findByCart(cart.get());

        for (ItemOrder item : items) {
            Product itemProduct = item.getProduct();

            itemProduct.decreaseStock(item);

            item.setExchange(false);
            productRepository.save(itemProduct);
        }

        Coupon coupon = couponRepository.findByCode(orderDTO.getCode());

        ClientCoupon clientCoupon = exchangeCouponRepository.findByCode(orderDTO.getExchangeCode());

        if( coupon != null) {
            coupon.setAmount(coupon.getAmount() - 1);
            couponRepository.save(coupon);
        }

        order.setBillingAddress(billingAddres.get());
        order.setDeliveryAddress(deliveryAddres.get());

        order.setClient(client.get());
        order.setItemList(items);

        order.setTotal(orderDTO.getCartSubTotal());
        order.setCoupon(coupon);

        order.setClientCoupon(clientCoupon);

//        clientCoupon.setDeleted(true);
//        exchangeCouponRepository.save(clientCoupon);

        orderRepository.save(order);

        itemRepository.findByCart(cart.get()).forEach( x -> { x.setCart(null);
            itemRepository.save(x);
        } );

        return order;
    }
}
