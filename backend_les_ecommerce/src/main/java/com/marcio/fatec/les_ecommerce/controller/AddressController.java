package com.marcio.fatec.les_ecommerce.controller;


import com.marcio.fatec.les_ecommerce.DTO.AddressDTO;
import com.marcio.fatec.les_ecommerce.domain.Address;
import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.Result;
import com.marcio.fatec.les_ecommerce.facade.Facade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/adresses")
public class AddressController {

    @Autowired
    private Facade facade;

    @Autowired
    private Result result;

    @PostMapping
    public ResponseEntity save(@RequestBody AddressDTO addressDTO){

        Address address1 = new Address(addressDTO);

        result = facade.save(address1);

        return ResponseEntity.ok().body(result);
    }

    @PutMapping
    public ResponseEntity<Result> update( @RequestBody AddressDTO addressDTO){

        System.out.println("To no controller endereço UPDATE");

        Address address = new Address(addressDTO);

        result = facade.update(address);

        return ResponseEntity.ok().body(result);

    }

    @GetMapping("/detalhesEndereco")
    public ResponseEntity getAddressDetails(@Param("id") Long id){

        Address address = new Address();

//        Client client = new Client();
//        client.setId(id);
        //        address.setClient(client);

        address.setId(id);

        result = facade.get(address);

        return ResponseEntity.ok().body(result);
    }

    @GetMapping
    public ResponseEntity getAddresses(){
        Address address1;

        result = facade.list(new Address());

        return ResponseEntity.ok().body(result);
    }
}
