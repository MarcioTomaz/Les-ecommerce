package com.marcio.fatec.les_ecommerce.controller;

import com.marcio.fatec.les_ecommerce.DTO.AddressDTO;
import com.marcio.fatec.les_ecommerce.DTO.CreditCardDTO;
import com.marcio.fatec.les_ecommerce.domain.Address;
import com.marcio.fatec.les_ecommerce.domain.CreditCard;
import com.marcio.fatec.les_ecommerce.domain.Result;
import com.marcio.fatec.les_ecommerce.facade.Facade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cards")
public class CreditCardController {


    @Autowired
    private Facade facade;

    @Autowired
    private Result result;

    @PostMapping
    public ResponseEntity save(@RequestBody CreditCardDTO creditCardDTO){

        CreditCard creditCard = new CreditCard(creditCardDTO);

        result = facade.save(creditCard);

        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/detalhesCartao")
    public ResponseEntity getCreditCard(@Param("id") Long id){

        CreditCard creditCard = new CreditCard();
        creditCard.setId(id);

        result = facade.get(creditCard);

        return ResponseEntity.ok().body(result);

    }

}
