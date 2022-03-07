package com.marcio.fatec.les_ecommerce.strategy.client.validate;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.CreditCard;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.strategy.IStrategy;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public class ValidateCreditCardLength implements IStrategy {

    @Override
    public String process(DomainEntity domainEntity) {

            CreditCard creditCard = (CreditCard) domainEntity;

            StringBuilder msg = new StringBuilder();

            if( creditCard.getCreditCardNumber().trim().length() != 16 ) {
                msg.append("O cartão deve conter 16 digitos.");

            }
        return msg.toString();
    }
}
