package com.marcio.fatec.les_ecommerce.strategy.client.validate;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.strategy.IStrategy;
import org.springframework.stereotype.Service;

@Service
public class ValidateCPF implements IStrategy {

    @Override
    public String process(DomainEntity domainEntity) {

        if ( domainEntity instanceof Client){

            Client client = ( Client ) domainEntity;

            StringBuilder stringBuilder = new StringBuilder();

            if( client.getCpf().isEmpty() || client.getCpf() == "" ) stringBuilder.append(" CPF não pode ser vazio. ");

            return stringBuilder.toString();
        }

        return "";
    }
}
