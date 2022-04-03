package com.marcio.fatec.les_ecommerce.service;

import com.marcio.fatec.les_ecommerce.domain.Client;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IClientService {

    Client authenticate(String email, String password);

    Client saveClient(Client client);

    void validarEmail(String email);

    List<Client> findAllClientDeletedFalse();

    Optional<Client> setToDisable(Long id);

}
