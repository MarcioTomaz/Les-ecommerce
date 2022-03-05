package com.marcio.fatec.les_ecommerce.DAO;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientDAO implements IDAO{

    @Autowired
    ClientRepository clientRepository;

    @Override
    public DomainEntity create(DomainEntity domainEntity) {

        Client client = (Client) domainEntity;

        clientRepository.save(client);

        return client;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public void update(DomainEntity domainEntity) {

        Client client = ( Client ) domainEntity;
        Client editClient = clientRepository.getById(client.getId());

        editClient.setName(client.getName());
        editClient.setEmail(client.getEmail());
        editClient.setGender(client.getGender());
        editClient.setBirthDate(client.getBirthDate());
        editClient.setCpf(client.getCpf());
        editClient.setAreaCode(client.getAreaCode());
        editClient.setType(client.getType());

        clientRepository.save(editClient);
    }

    @Override
    public List<DomainEntity> list(DomainEntity domainEntity) {
        return null;
    }
}
