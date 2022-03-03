package com.marcio.fatec.les_ecommerce.strategy.client;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.strategy.IStrategy;
import org.springframework.stereotype.Service;

@Service
public class ValidatePasswordNumberCaracter implements IStrategy {
    @Override
    public String process(DomainEntity domainEntity) {
        if (domainEntity instanceof Client) {
            Client client = (Client) domainEntity;

            StringBuilder stringBuilder = new StringBuilder();

            if( client.getPassword().trim().length() < 8 ) stringBuilder.append(" A senha deve conter mais de 8 caracteres ");

            return stringBuilder.toString();

        }

        return "";
    }
}
