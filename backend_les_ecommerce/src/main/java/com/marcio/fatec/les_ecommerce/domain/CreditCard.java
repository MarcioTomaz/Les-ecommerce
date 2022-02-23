package com.marcio.fatec.les_ecommerce.domain;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

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

    @Column(name = "expirationDate" )
    private String expirationDate; // data de validade

    @Column(name = "cardSecurity" )
    private String cardSecurity; // 3 digitos la

    @Column(name = "CardPreferencial" )
    private Boolean CardPreferencial;

    @Column(name = "cardFlag" )
    private String cardFlag;// bandeira

    @ManyToOne
    private Client client;
}
