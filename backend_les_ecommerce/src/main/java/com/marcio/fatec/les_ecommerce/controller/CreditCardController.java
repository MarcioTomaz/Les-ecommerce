package com.marcio.fatec.les_ecommerce.controller;

import com.marcio.fatec.les_ecommerce.DTO.CreditCardDTO;
import com.marcio.fatec.les_ecommerce.domain.*;
import com.marcio.fatec.les_ecommerce.facade.Facade;
import com.marcio.fatec.les_ecommerce.repository.CreditCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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

    @Autowired
    CreditCardRepository creditCardRepository;

    @GetMapping("/cartoes")
    public ResponseEntity getAllCreditCards(@Param("id") Long id){

        CreditCard creditCard = new CreditCard();

        Client client = new Client();
        client.setId(id);
        creditCard.setClient(client);

        List<CreditCard> creditCardDTOS = new ArrayList<>();

        creditCardDTOS = creditCardRepository.findAllCreditCardByClientIdAndDeletedFalse(client.getId());

//        result = facade.list(creditCard);

        return ResponseEntity.ok().body(creditCardDTOS);
    }

    @DeleteMapping("/deletar")
    public ResponseEntity delete(@Param("id") Long id){

        CreditCard creditCard = new CreditCard();
        creditCard.setId(id);

        result = facade.delete(creditCard);

        return ResponseEntity.ok().body(result);
    }
}
