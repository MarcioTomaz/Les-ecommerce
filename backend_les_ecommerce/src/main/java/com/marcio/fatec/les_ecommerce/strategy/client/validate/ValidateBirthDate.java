package com.marcio.fatec.les_ecommerce.strategy.client.validate;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.strategy.IStrategy;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class ValidateBirthDate implements IStrategy {

    @Override
    public String process(DomainEntity domainEntity) {

        Client client = (Client) domainEntity;
        StringBuilder msg = new StringBuilder();

        if(client.getBirthDate().isAfter(LocalDate.now())){
            msg.append(" A data deve ser menor ou igual a data atual. ");
        }

        return msg.toString();
    }
}
