package com.marcio.fatec.les_ecommerce.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DashboardDTO {

    private String cardName;

    private Integer cardsQuantity;

    private String cardRarity;

    private String cardType;

    private String orderDate;

}
