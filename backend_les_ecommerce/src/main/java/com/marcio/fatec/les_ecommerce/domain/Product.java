package com.marcio.fatec.les_ecommerce.domain;

import com.marcio.fatec.les_ecommerce.domain.Enums.CardRarity;
import com.marcio.fatec.les_ecommerce.domain.Enums.ProductStatus;
import com.marcio.fatec.les_ecommerce.domain.Enums.CardType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
//@NoArgsConstructor
@AllArgsConstructor
@Table( name= "_product")
@Entity
public class Product extends DomainEntity{

    @Column(name = "stock")
    private Integer stock;

    @Column(name = "productStatus")
    private ProductStatus productStatus;

    @Column(name = "productDescription")
    private String productDescription;

    @Column(name = "cardRarity" )
    private CardRarity cardRarity;

    @Enumerated( EnumType.STRING)
    @Column(name = "cardType" )
    private CardType cardType;

    @Column(name = "price")
    private Double price;

}
