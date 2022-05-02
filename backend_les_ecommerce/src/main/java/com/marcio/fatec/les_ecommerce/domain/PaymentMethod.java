package com.marcio.fatec.les_ecommerce.domain;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "_payment_method")
public class PaymentMethod extends DomainEntity {

    private Double paymentValue;
    @ManyToOne
    @JoinColumn(name = "credit_card_id")
    private CreditCard creditCard;
}