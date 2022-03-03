package com.marcio.fatec.les_ecommerce.strategy.client;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.repository.ClientRepository;
import com.marcio.fatec.les_ecommerce.strategy.IStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ValidateExistingEmail implements IStrategy {

    @Autowired
    ClientRepository clientRepository;

    @Override
    public String process(final DomainEntity domainEntity) {

        Client client = (Client) domainEntity;
        StringBuilder msg = new StringBuilder();

        if(client.getEmail() != null){
            if(clientRepository.existsByEmail(client.getEmail())){
                msg.append(" Email já cadastrado. ");
            }
        }
        return msg.toString();
    }
}
