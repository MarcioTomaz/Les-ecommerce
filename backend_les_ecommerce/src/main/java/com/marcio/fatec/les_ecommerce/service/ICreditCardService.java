package com.marcio.fatec.les_ecommerce.service;

import com.marcio.fatec.les_ecommerce.DTO.CreditCardDTO;
import com.marcio.fatec.les_ecommerce.domain.Client;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICreditCardService {

//    Client authenticate(String email, String password);
//
//    Client saveClient(Client client);
//
//    void validarEmail(String email);

    List<CreditCardDTO> getAllCreditCards(Long id);
}
