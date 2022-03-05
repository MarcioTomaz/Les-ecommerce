package com.marcio.fatec.les_ecommerce.domain;


import com.marcio.fatec.les_ecommerce.DTO.CreditCardDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Getter
@Setter
//@NoArgsConstructor
@AllArgsConstructor
@Table( name= "_creditCard")
@Entity
public class CreditCard extends DomainEntity{

    @Column(name = "creditCardNumber" )
    private String creditCardNumber;

    @Column(name = "cardHolder" )
    private String cardHolder;// titular do cartao

    @Column(name = "expirationDateMonth" )
    private String expirationDateMonth; // data de validade

    @Column(name = "expirationDateYear" )
    private String expirationDateYear; // data de validade

    @Column(name = "cardSecurity" )
    private String cardSecurity; // 3 digitos la

    @Column(name = "cardHolderCpf")
    private String cardHolderCpf;

    @Column(name = "CardPreferencial" )
    private Boolean cardPreferencial;

    @Column(name = "cardFlag" )
    private String cardFlag;// bandeira

    @ManyToOne
    private Client client;

    public CreditCard(CreditCardDTO creditCardDTO) {

        Client client = new Client();
        client.setId(creditCardDTO.getClient());

        this.client = client;
        this.creditCardNumber = creditCardDTO.getCreditCardNumber();
        this.cardHolder = creditCardDTO.getCardHolder();
        this.expirationDateMonth = creditCardDTO.getExpirationDateMonth();
        this.expirationDateYear = creditCardDTO.getExpirationDateYear();
        this.cardSecurity = creditCardDTO.getCardSecurity();
        this.cardHolderCpf = creditCardDTO.getCardHolderCpf();
        this.cardPreferencial = creditCardDTO.getCardPreferencial();
        this.cardFlag = creditCardDTO.getCardFlag();
    }
}
