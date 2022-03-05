package com.marcio.fatec.les_ecommerce.strategy.client.validate;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.strategy.IStrategy;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public class ValidatePasswordEquals implements IStrategy {

    @Override
    public String process(DomainEntity domainEntity) {

        Client client = (Client) domainEntity;

        StringBuilder msg = new StringBuilder();

        if( !client.getPassword().equals(client.getConfirmPassword()) ){
            msg.append(" As senhas devem ser iguais ");
        }

        return msg.toString();
    }
}
