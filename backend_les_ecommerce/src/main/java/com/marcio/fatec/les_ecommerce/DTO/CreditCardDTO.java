package com.marcio.fatec.les_ecommerce.DTO;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.CreditCard;
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

    public CreditCardDTO(CreditCard creditCard){

        this.creditCardNumber = creditCard.getCreditCardNumber();
        this.cardHolder = creditCard.getCardHolder();
        this.expirationDateMonth = creditCard.getExpirationDateMonth();
        this.expirationDateYear = creditCard.getExpirationDateYear();
        this.cardSecurity = creditCard.getCardSecurity();
        this.cardHolderCpf = creditCard.getCardHolderCpf();
        this.cardPreferencial = creditCard.getCardPreferencial();
        this.cardFlag = creditCard.getCardFlag();
//        this.client = creditCard.getClient();
    }

    public CreditCardDTO(CreditCardDTO x) {
    }
}
