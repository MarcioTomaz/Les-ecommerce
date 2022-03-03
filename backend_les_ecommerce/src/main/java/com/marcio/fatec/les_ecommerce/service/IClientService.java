package com.marcio.fatec.les_ecommerce.service;

import com.marcio.fatec.les_ecommerce.domain.Client;
import org.springframework.stereotype.Repository;

@Repository
public interface IClientService {

    Client authenticate(String email, String password);

    Client saveClient(Client client);

    void validarEmail(String email);
}
