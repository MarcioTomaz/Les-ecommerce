package com.marcio.fatec.les_ecommerce.service.serviceImpl;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.repository.ClientRepository;
import com.marcio.fatec.les_ecommerce.service.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImpl implements IClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public Client authenticate(String email, String senha) {

        Optional<Client> client = clientRepository.findByEmail(email);

        if(!client.isPresent()){
            throw new IllegalArgumentException(" Email inválida. ");
        }

        if(!client.get().getPassword().equals(senha)){
            throw new IllegalArgumentException(" Senha inválida. ");
        }

        if( client.get().isDeleted()){
            throw new IllegalArgumentException(" Usuário desativado. ");
        }

//        if(!client.isPresent()){
//            return " Email inválida. ";
//        }
//
//        if(!client.get().getPassword().equals(senha)){
//            throw new IllegalArgumentException(" Senha inválida. ");
//        }
//
//        if( client.get().isDeleted()){
//            throw new IllegalArgumentException(" Usuário desativado. ");
//        }

        return client.get();
    }

    @Override
    @Transactional
    public Client saveClient(Client client) {

        return clientRepository.save(client);
    }



    @Override
    public void validarEmail(String email) {

        boolean existe = clientRepository.existsByEmail(email);

        if(existe) {
            throw new IllegalArgumentException(new Exception());
        }
    }

    @Override
    public List<Client> findAllClientDeletedFalse() {
        return null;
    }

    @Override
    public Optional<Client> setToDisable(Long id) {
        Optional<Client> client = clientRepository.findById(id);

        if (client.get().isDeleted() == true) {
            client.get().setUpdatedDate(LocalDateTime.now());
            client.get().setDeletedDate(null);
            client.get().setDeleted(false);
            clientRepository.save(client.get());
        } else {
            client.get().setDeletedDate(LocalDateTime.now());
            client.get().setUpdatedDate(LocalDateTime.now());
            client.get().setDeleted(true);
            clientRepository.save(client.get());
        }
            return client;
        }
    }
