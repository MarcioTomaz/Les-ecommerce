package com.marcio.fatec.les_ecommerce.DAO;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public DomainEntity delete(Long id) {
        return null;
    }

    @Override
    public DomainEntity update(DomainEntity domainEntity) {
        return null;
    }

    @Override
    public List<DomainEntity> list(DomainEntity domainEntity) {
        return null;
    }
}
