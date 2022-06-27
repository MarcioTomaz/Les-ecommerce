package com.marcio.fatec.les_ecommerce.strategy.client.validate;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.strategy.IStrategy;
import org.springframework.stereotype.Component;

@Component
public class ValidateTypePhone implements IStrategy {
    @Override
    public String process(DomainEntity domainEntity) {

        Client client = (Client) domainEntity;
        StringBuilder msg = new StringBuilder();

        if(client.getPhoneType() == null || client.getPhoneType().equals(" ") ){
            msg.append(" Insira um tipo de telefone. ");
        }

        return msg.toString();
    }
}
