package com.marcio.fatec.les_ecommerce.controller;

import com.marcio.fatec.les_ecommerce.DTO.order.OrderStepAddressDTO;
import com.marcio.fatec.les_ecommerce.domain.*;
import com.marcio.fatec.les_ecommerce.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @PostMapping("/carrinhoItens")
    public ResponseEntity orderStepProducts(@RequestParam("id") Long id){

        Optional<Client> client =  clientRepository.findById(id);

        Optional<Cart> cartOptional = cartRepository.findByClient(client.get());

        List<ItemOrder> items = itemRepository.findByCart(cartOptional.get());

        Order order = new Order();
        order.setClient(client.get());
        order.setItemList(items);

        orderRepository.save(order);

        return ResponseEntity.ok().body(order.getId());
    }

    @GetMapping
    public Optional<Order> getTeste(){

        Optional<Client> client =  clientRepository.findById(1L);

        return orderRepository.findByClient(client.get());
    }

    @PostMapping("/enderecos")
    public ResponseEntity orderStepAddress(@RequestBody OrderStepAddressDTO dto){

//        Optional<Client> client =  clientRepository.findById(dto());

        Optional<Address> addressEntrega = addresRepository.findById(dto.getAddressEntrega());
        Optional<Address> addressCobranca = addresRepository.findById(dto.getAddressCobranca());

        Optional<Order> order = orderRepository.findById(dto.getOrderId());
//        order.setClient(client.get());
        order.get().setDeliveryAddress(addressEntrega.get());
        order.get().setBillingAddress(addressCobranca.get());

        orderRepository.save(order.get());

        return ResponseEntity.ok().body(order);
    }

}
