package com.marcio.fatec.les_ecommerce.controller;

import com.marcio.fatec.les_ecommerce.DTO.CartDTO;
import com.marcio.fatec.les_ecommerce.domain.Cart;
import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.ItemOrder;
import com.marcio.fatec.les_ecommerce.domain.Product;
import com.marcio.fatec.les_ecommerce.repository.CartRepository;
import com.marcio.fatec.les_ecommerce.repository.ClientRepository;
import com.marcio.fatec.les_ecommerce.repository.ItemRepository;
import com.marcio.fatec.les_ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/cart")
public class CartController {

    //    @PostMapping("/adicionarCarrinho")
//    public ResponseEntity addCart(@RequestBody ItemOrder itemOrder){
//
//        cart.getItemOrders().add(itemOrder);
//        System.out.println(cart);
//        System.out.println(itemOrder);
//
//        return ResponseEntity.ok(cart);
//    }

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    CartRepository cartRepository;

    @Autowired
    ItemRepository itemRepository;
//    private final Cart cart = new Cart();


    @PostMapping("/adicionarCarrinho")
    public ResponseEntity addCart(@RequestBody CartDTO cartDTO ){

        Optional<Client> client = clientRepository.findById(cartDTO.getClientId());
        Optional<Product> product = productRepository.findById(cartDTO.getProductId());

        try {
            ItemOrder itemOrder = new ItemOrder();
            itemOrder.setProduct(product.get());
            itemOrder.setQuantity(cartDTO.getQuantity());

            List<ItemOrder> listOrder = new ArrayList<>();
            listOrder.add(itemOrder);

//            Cart cartSaved = cartRepository.save(cart);
            Cart cartSaved;

            Optional<Cart> cartOptional = cartRepository.findByClient(client.get());

            if( cartOptional.isPresent()) {
                cartSaved = cartOptional.get();
            }else {
                Cart cart = new Cart();
                cart.setClient(client.get());
                cartSaved = cartRepository.save(cart);
            }
            itemOrder.setCart(cartSaved);

            itemRepository.save(itemOrder);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }

        return ResponseEntity.status(HttpStatus.OK).body("Salvo com sucesso!");
    }

    @PutMapping("/removerItemCarrinho")
    public ResponseEntity removeCart(@Param("id") Long id){

        ItemOrder itemOrder1 = new ItemOrder();
        itemOrder1.setId(id);
        
        try{
            itemRepository.delete(itemOrder1);
            return ResponseEntity.ok().body("Item removido com sucesso!");

        }catch (Exception e){

            return ResponseEntity.badRequest().body("Deu ruim");
        }
    }

    @GetMapping
    public ResponseEntity getCart(@Param("id") Long id){

        Optional<Client> client = clientRepository.findById(id);

        Optional<Cart> cartOptional = cartRepository.findByClient(client.get());

        List<ItemOrder> items = itemRepository.findByCart(cartOptional.get());

        return ResponseEntity.ok().body(items);

    }
}
