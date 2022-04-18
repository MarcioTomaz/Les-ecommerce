package com.marcio.fatec.les_ecommerce.controller;

import com.marcio.fatec.les_ecommerce.DTO.OrderDTO;
import com.marcio.fatec.les_ecommerce.domain.*;
import com.marcio.fatec.les_ecommerce.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static com.marcio.fatec.les_ecommerce.domain.Enums.ProductStatus.EM_TRANSITO;
import static com.marcio.fatec.les_ecommerce.domain.Enums.ProductStatus.RECUSADO;

@RestController
@RequestMapping("/api/order")
public class OrderController {

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


    @PostMapping("/pedido")
    public ResponseEntity order(@RequestBody OrderDTO orderDTO){

        Order order = new Order(orderDTO);

        Optional<Client> client = clientRepository.findById(orderDTO.getClientId());

        Optional<Address> deliveryAddres = addresRepository.findById(orderDTO.getAddressEntrega());
        Optional<Address> billingAddres = addresRepository.findById(orderDTO.getAddressCobranca());

        Optional<Cart> cart = cartRepository.findByClient(client.get());
        List<ItemOrder> items = itemRepository.findByCart(cart.get());

        Coupon coupon = couponRepository.findByCode(orderDTO.getCode());

        System.out.println(orderDTO.getPaymentMethodList());
        System.out.println(orderDTO.getCartSubTotal());

        order.setBillingAddress(billingAddres.get());
        order.setDeliveryAddress(deliveryAddres.get());

        order.setClient(client.get());
        order.setItemList(items);

        order.setTotal(orderDTO.getCartSubTotal());
        order.setCoupon(coupon);

        orderRepository.save(order);

        return ResponseEntity.ok().body(order);
    }

    @GetMapping("/pedidos")
    public ResponseEntity getAllOrders(@Param("id") Long id){

        Optional<Client> client = clientRepository.findById(id);
        List<Order> result = orderRepository.findAllOrdersByClient(client.get());

        return ResponseEntity.ok().body(result);
    }

    @GetMapping
    public Optional<Order> getTeste(){

        Optional<Client> client =  clientRepository.findById(1L);

        return orderRepository.findByClient(client.get());
    }

    @GetMapping("/detalhesPedido")
    public ResponseEntity getOrderDetails(@Param("id") Long id){

        Optional<Order> order = orderRepository.findById(id);

        return ResponseEntity.ok().body(order);
    }

    @GetMapping("/pedidosAdm")
    public ResponseEntity getOrdersAdmList(){

        List<Order> order = orderRepository.findAll();

        return ResponseEntity.ok().body(order);
    }

    @PostMapping("/recusarPedido")
    public ResponseEntity refuseOrder(@Param("id") Long id){

        Optional<Order> order = orderRepository.findById(id);

        order.get().setStatus(RECUSADO);

        orderRepository.save(order.get());

        return ResponseEntity.ok().body(order);
    }

    @PostMapping("/aceitarPedido")
    public ResponseEntity acceptOrder(@Param("id") Long id){

        Optional<Order> order = orderRepository.findById(id);

        order.get().setStatus(EM_TRANSITO);

        orderRepository.save(order.get());

        return ResponseEntity.ok().body(order);
    }


}
