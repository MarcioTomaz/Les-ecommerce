package com.marcio.fatec.les_ecommerce.controller;

import com.marcio.fatec.les_ecommerce.DTO.CartDTO;
import com.marcio.fatec.les_ecommerce.domain.Cart;
import com.marcio.fatec.les_ecommerce.domain.ItemOrder;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/cart")
public class CartController {

    private Cart cart = new Cart();

//    @PostMapping("/adicionarCarrinho")
//    public ResponseEntity addCart(@RequestBody ItemOrder itemOrder){
//
//        cart.getItemOrders().add(itemOrder);
//        System.out.println(cart);
//        System.out.println(itemOrder);
//
//        return ResponseEntity.ok(cart);
//    }

    @PostMapping("/adicionarCarrinho")
    public ResponseEntity addCart(@RequestBody CartDTO cartDTO ){

        System.out.println(cartDTO.toString());
        

        return ResponseEntity.status(HttpStatus.ACCEPTED).body(cartDTO);
    }

    @PutMapping("/removerItemCarrinho")
    public ResponseEntity removeCart(@RequestBody ItemOrder itemOrder){
        
        cart.getItemOrders().remove(itemOrder.getProduct());

        return ResponseEntity.ok().body("Item removido com sucesso!");
    }

    @GetMapping
    public ResponseEntity getCart(){

        return ResponseEntity.ok().body(cart.getItemOrders());

    }
}
