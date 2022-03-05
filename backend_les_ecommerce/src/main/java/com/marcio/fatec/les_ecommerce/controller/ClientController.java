package com.marcio.fatec.les_ecommerce.controller;

import com.marcio.fatec.les_ecommerce.DTO.ClientAuthenticateDTO;
import com.marcio.fatec.les_ecommerce.DTO.ClientDTO;
import com.marcio.fatec.les_ecommerce.DTO.ClientDetailsDTO;
import com.marcio.fatec.les_ecommerce.domain.Admin;
import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.Result;
import com.marcio.fatec.les_ecommerce.facade.Facade;
import com.marcio.fatec.les_ecommerce.repository.ClientRepository;
import com.marcio.fatec.les_ecommerce.service.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/clients")
public class ClientController {


    @Autowired
    ClientRepository clientRepository;
    ///
    @Autowired
    private Facade facade;

    @Autowired
    private Result result;

    @Autowired
    IClientService clientService;

    @PostMapping("/autenticar")
    public ResponseEntity authenticate( @RequestBody ClientAuthenticateDTO dto){
        try {
            Client clientAuthenticate = clientService.authenticate(dto.getEmail(), dto.getPassword());

            return ResponseEntity.ok(clientAuthenticate);

        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email ou senha não invalidos");
        }
    }

    @PostMapping("/autenticar/admin")
    public ResponseEntity authenticateAdmin( @RequestBody Admin admin){

        try {
            Client adminAuthenticate = clientService.authenticate(admin.getEmail(), admin.getPassword());

            return ResponseEntity.ok(adminAuthenticate);

        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email ou senha não invalidos");
        }
    }

    @PostMapping
    public ResponseEntity save(@RequestBody ClientDTO dto){

        Client client = new Client(dto);

        result = facade.save(client);

        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/detalhesUsuario")
    public ResponseEntity getClientDetails(@Param("id") Long id){

       Optional<Client> client = clientRepository.findById(id);

        ClientDetailsDTO clientDetailsDTO = new ClientDetailsDTO(client.get());

       return ResponseEntity.ok().body(clientDetailsDTO);
    }

    @PutMapping()
    public ResponseEntity update( @RequestBody ClientDTO clientDTO ){// @Param("id") Long id,

        Client client = new Client(clientDTO);

        result = facade.update(client);

        return ResponseEntity.ok().body(result);
    }


}
