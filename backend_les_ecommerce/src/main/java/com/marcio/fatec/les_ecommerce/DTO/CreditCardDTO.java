package com.marcio.fatec.les_ecommerce.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreditCardDTO {


    private String creditCardNumber;
    private String cardHolder;
    private String expirationDateMonth;
    private String expirationDateYear;
    private String cardSecurity;
    private String cardHolderCpf;
    private Boolean cardPreferencial;
    private String cardFlag;

    private Long client;
}
