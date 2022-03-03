package com.marcio.fatec.les_ecommerce.strategy.client;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.strategy.IStrategy;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class ClientConstraints implements IStrategy {


    @Override
    public String process(DomainEntity domainEntity) {

        if (domainEntity instanceof Client) {
            Client client = (Client) domainEntity;

            StringBuilder stringBuilder = new StringBuilder();
//
//            Pattern pattern = Pattern.compile("/(^\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}$)|(^\\d{3}\\d{3}\\d{3}\\d{2}$)|(^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}\\-\\d{2}$)|(^\\d{2}\\d{3}\\d{3}\\d{4}\\d{2}$)/");
//            Matcher matcher = pattern.matcher(client.getCpf());

//            if (!matcher.matches()) stringBuilder.append("CPF não é válido.");

//            A senha cadastrada pelo usuário deve ser composta de pelo menos 8 caracteres,
//            ter letras maiúsculas e minúsculas além de conter caracteres especiais.


//            if( !client.getPassword().equals(client.getConfirmPassword()) ) stringBuilder.append(" As senhas devem ser iguais. ");

            return stringBuilder.toString();
        }

        return "";
    }
}
