package com.marcio.fatec.les_ecommerce.controller;


import com.marcio.fatec.les_ecommerce.DTO.AddressDTO;
import com.marcio.fatec.les_ecommerce.domain.Address;
import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.Result;
import com.marcio.fatec.les_ecommerce.facade.Facade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/adresses")
public class AddressController {

    @Autowired
    private Facade facade;

    @Autowired
    private Result result;

    @PostMapping
    public ResponseEntity save(@RequestBody AddressDTO addressDTO){

        System.out.println("To no save do address");
        System.out.println(addressDTO.toString());

        Address address1 = new Address(addressDTO);

        System.out.println(address1.toString());

        result = facade.save(address1);

        return ResponseEntity.ok().body(result);
    }
}
