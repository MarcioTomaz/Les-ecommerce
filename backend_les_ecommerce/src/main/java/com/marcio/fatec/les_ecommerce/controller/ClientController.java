package com.marcio.fatec.les_ecommerce.controller;

import com.marcio.fatec.les_ecommerce.DTO.ClientAuthenticateDTO;
import com.marcio.fatec.les_ecommerce.DTO.ClientDTO;
import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.facade.Facade;
import com.marcio.fatec.les_ecommerce.repository.ClientRepository;
import com.marcio.fatec.les_ecommerce.service.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

//    @Autowired
//    IClientService clientService;

    @Autowired
    ClientRepository clientRepository;

    ///
    @Autowired
    private Facade facade;

//    @PostMapping("/autenticar")
//    public ResponseEntity authenticate( @RequestBody ClientAuthenticateDTO dto){
////        try {
////            Client clientAuthenticate = clientService.authenticate(dto.getEmail(), dto.getPassword());
////
////            return ResponseEntity.ok(clientAuthenticate);
////
////        }catch (Exception e){
////            return ResponseEntity.badRequest().body(e.getMessage());
////        }
//    }

    @PostMapping
    public ResponseEntity save(@RequestBody ClientDTO dto){
//
        Client client = new Client(dto);
//
//        try{
//            Client saveClient = clientService.saveClient(client);
//            return new ResponseEntity(saveClient, HttpStatus.CREATED);
//
//        }catch (Exception e ){
//            return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body(e.getMessage());
//        }

        return ResponseEntity.ok().body(facade.save(client));

    }

}
