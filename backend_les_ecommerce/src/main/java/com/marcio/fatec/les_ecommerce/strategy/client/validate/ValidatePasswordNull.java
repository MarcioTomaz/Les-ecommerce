package com.marcio.fatec.les_ecommerce.strategy.client.validate;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.strategy.IStrategy;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public class ValidatePasswordNull implements IStrategy {


    @Override
    public String process(DomainEntity domainEntity) {
        if (domainEntity instanceof Client) {
            Client client = (Client) domainEntity;

            StringBuilder stringBuilder = new StringBuilder();

            if( client.getPassword() == null || client.getPassword().isEmpty() ) stringBuilder.append(" A senha não pode ser vazia. ");

            return stringBuilder.toString();
        }

        return "";
    }
}
