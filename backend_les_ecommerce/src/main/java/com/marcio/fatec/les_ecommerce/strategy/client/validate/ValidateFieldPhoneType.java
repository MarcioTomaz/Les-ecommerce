package com.marcio.fatec.les_ecommerce.strategy.client.validate;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.domain.Enums.Gender;
import com.marcio.fatec.les_ecommerce.domain.Enums.PhoneType;
import com.marcio.fatec.les_ecommerce.strategy.IStrategy;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class ValidateFieldPhoneType implements IStrategy {
    @Override
    public String process(DomainEntity domainEntity) {

        Client client = (Client) domainEntity;
        StringBuilder msg = new StringBuilder();

        String email = client.getEmail();
        LocalDate birthDate = client.getBirthDate();
        PhoneType phoneType = client.getPhoneType();
        String areaCode = client.getAreaCode();
        String phoneNumber = client.getPhoneNumber();
        Gender gender = client.getGender();



        if(phoneType == null || phoneType.equals(null)){
            msg.append("O campo Tipo Telefone é obrigatório");
        }


//        msg.append(".");


        return msg.toString();
    }
}
