package com.marcio.fatec.les_ecommerce.domain;

import com.marcio.fatec.les_ecommerce.DTO.ProductDTO;
import com.marcio.fatec.les_ecommerce.domain.Enums.CardRarity;
import com.marcio.fatec.les_ecommerce.domain.Enums.CardType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.validation.constraints.NotBlank;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table( name= "_product")
@Entity
public class Product extends DomainEntity{

    @Column(name = "stock")
    private Integer stock;

    @NotNull(message = "O nome não pode ser nula")
    @NotBlank(message = "O nome não pode ser em branco")
    @Column(name = "name")
    private String name;

//    @NotNull(message = "O status não pode ser nulo")
//    @NotBlank(message = "O status não pode ser em branco")
//    @Enumerated(EnumType.STRING)
//    @Column(name = "productStatus")
//    private ProductStatus productStatus;

    @Column(name = "productDescription")
    private String productDescription;

    @NotNull(message = "A raridade não pode ser nula")
    @Enumerated( EnumType.STRING)
    @Column(name = "cardRarity" )
    private CardRarity cardRarity;

    @NotNull(message = "O tipo não pode ser nulo")
    @Enumerated( EnumType.STRING)
    @Column(name = "cardType" )
    private CardType cardType;

    @NotNull(message = "O preco nao pode ser nulo")
    @Column(name = "price")
    private Double price;

    public Product( ProductDTO product ){
        this.name = product.getName();
        this.stock = product.getStock();
        this.productDescription = product.getProductDescription();
        this.cardRarity = CardRarity.valueOf(product.getCardRarity());
        this.cardType = CardType.valueOf(product.getCardType());
        this.price = product.getPrice();
    }

    public Product( Product product ){
        this.name = product.getName();
        this.stock = product.getStock();
        this.productDescription = product.getProductDescription();
        this.cardRarity = CardRarity.valueOf(String.valueOf(product.getCardRarity()));
        this.cardType = CardType.valueOf(String.valueOf(product.getCardType()));
        this.price = product.getPrice();
    }

    public void decreaseStock( ItemOrder itemOrder ){

        this.stock -= Integer.parseInt(String.valueOf(itemOrder.getQuantity()));
    }

}
