package com.marcio.fatec.les_ecommerce.controller;

import com.marcio.fatec.les_ecommerce.DTO.OrderDTO;
import com.marcio.fatec.les_ecommerce.DTO.OrderExchangeDTO;
import com.marcio.fatec.les_ecommerce.domain.*;
import com.marcio.fatec.les_ecommerce.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static com.marcio.fatec.les_ecommerce.domain.Enums.ProductStatus.*;

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

    @Autowired
    ProductRepository productRepository;


    @PostMapping("/pedido")
    public ResponseEntity order(@RequestBody OrderDTO orderDTO){

        Order order = new Order(orderDTO);

        Optional<Client> client = clientRepository.findById(orderDTO.getClientId());

        Optional<Address> deliveryAddres = addresRepository.findById(orderDTO.getAddressEntrega());
        Optional<Address> billingAddres = addresRepository.findById(orderDTO.getAddressCobranca());

        Optional<Cart> cart = cartRepository.findByClient(client.get());
        List<ItemOrder> items = itemRepository.findByCart(cart.get());

        for (ItemOrder item : items) {
            Product itemProduct = item.getProduct();
            itemProduct.setStock((int) (itemProduct.getStock() - item.getQuantity())); //arrumar o cast dps
            item.setExchange(false);
            productRepository.save(itemProduct);
        }

                
        //        Product productStock = new Product();
        // productStock.setStock();

        Coupon coupon = couponRepository.findByCode(orderDTO.getCode());

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

        orderRepository.save(order);

        itemRepository.findByCart(cart.get()).forEach( x -> { x.setCart(null);
            itemRepository.save(x);
        } );

        return ResponseEntity.ok().body(order);
    }

    @GetMapping("/pedidos")
    public ResponseEntity getAllOrders(@Param("id") Long id){

        Optional<Client> client = clientRepository.findById(id);
        List<Order> result = orderRepository.findAllOrdersByClient(client.get());

        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/pedidoTroca")
    public ResponseEntity orderExchange(@Param("id") Long id){

        Optional<Order> result = orderRepository.findById(id);

        return ResponseEntity.ok().body(result.get());
    }

    @GetMapping("/detalhesPedido")
    public ResponseEntity getOrderDetails(@Param("id") Long id){

        Optional<Order> order = orderRepository.findById(id);

        return ResponseEntity.ok().body(order);
    }

    @GetMapping("/detalhesPedidoAdm")
    public ResponseEntity getOrderDetailsAdm(@Param("id") Long id){

        Optional<Order> order = orderRepository.findById(id);
//       Optional<Order> order = Optional.ofNullable(orderRepository.findByIdAndExchangeTrue(id));

        return ResponseEntity.ok().body(order);
    }

    @GetMapping("/pedidosAdm")
    public ResponseEntity getOrdersAdmList(){

        List<Order> order = orderRepository.findAll();

        return ResponseEntity.ok().body(order);
    }

//    @PostMapping("/recusarPedido")
//    public ResponseEntity refuseOrder(@Param("id") Long id){
//
//        Optional<Order> order = orderRepository.findById(id);
//
//        order.get().setStatus(RECUSADO);
//
//        orderRepository.save(order.get());
//
//        return ResponseEntity.ok().body(order);
//    }

    @PostMapping("/recusarPedido")
    public ResponseEntity refuseOrder(@Param("id") Long id){

        Optional<Order> order = orderRepository.findById(id);

        List<ItemOrder> items = order.get().getItemList();

        // buscar os itens da ordem pelo ID
        for (ItemOrder item : items) {

            Product product = item.getProduct();

            product.setStock((int) (product.getStock() + item.getQuantity()));
            productRepository.save(product);

            itemRepository.save(item);
        }

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

    @PostMapping("/emTroca")
    public ResponseEntity exchangeOrder(@RequestBody OrderExchangeDTO dto){
//        // buscar a order
        Optional<Order> order = orderRepository.findById(Long.valueOf(dto.getOrderId()));
//        // mudar o status pra em troca
        order.get().setStatus(EM_TROCA);

        List<ItemOrder> items = order.get().getItemList();
        // buscar os itens da ordem pelo ID
        for (ItemOrder item : items) {

            for(Long x : dto.getIdList()){
                if( x.equals(item.getId())){
                    item.setExchange(true);
                }
            }

            itemRepository.save(item);
        }
        order.get().setReason(dto.getReason());
        orderRepository.save(order.get());

        return ResponseEntity.ok().body(dto);
    }

    @PostMapping("/confirmarRecebimento")
    public ResponseEntity confirmReceipt(@Param("id") Long id){

        Optional<Order> order = orderRepository.findById(id);

        order.get().setStatus(PEDIDO_RECEBIDO);

        orderRepository.save(order.get());

        return ResponseEntity.ok().body(order);
    }

    @PostMapping("/trocaAceita")
    public ResponseEntity acceptExchange(@Param("id") Long id){

        Optional<Order> order = orderRepository.findById(id);

        List<ItemOrder> items = order.get().getItemList();

        // buscar os itens da ordem pelo ID
        for (ItemOrder item : items) {

            if(item.getExchange()){

                Product product = item.getProduct();

                product.setStock((int) (product.getStock() + item.getQuantity()));
                productRepository.save(product);
            }

            itemRepository.save(item);
        }

        order.get().setStatus(TROCA_AUTORIZADA);
        orderRepository.save(order.get());

        return ResponseEntity.ok().body(order);
    }

    @PostMapping("/recusarTroca")
    public ResponseEntity refuseExchange(@Param("id") Long id){

        Optional<Order> order = orderRepository.findById(id);

        order.get().setStatus(TROCA_RECUSADA);
        orderRepository.save(order.get());

        return ResponseEntity.ok().body(order);
    }

}
