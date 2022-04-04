package com.marcio.fatec.les_ecommerce.DTO;

import com.marcio.fatec.les_ecommerce.domain.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

    @NotNull(message = "A quantidade nao pode ser vazia")
    private Integer stock;

    @NotNull(message = "O nome não pode ser nula")
    @NotBlank(message = "O nome não pode ser em branco")
    private String name;
//    private String productStatus;
    private String productDescription;

    @NotNull(message = "A raridade não pode ser nula")
    @NotBlank(message = "A raridade nao pode ser vazio")
    private String cardRarity;

    @NotBlank( message = "O tipo não pode ser vazio")
    @NotNull(message = "O tipo não pode ser nulo")
    private String cardType;

//    @NotBlank(message = "O preco nao pode ser vazio")
    @NotNull(message = "O preco nao pode ser nulo")
    private Double price;

    private Long id;

    public ProductDTO( Product product ){
        this.id = product.getId();
        this.stock = product.getStock();
        this.name = product.getName();
//        this.productStatus = product.getProductStatus().toString();
        this.cardRarity = product.getCardRarity().toString();
        this.cardType = product.getCardType().toString();
        this.price = product.getPrice();
    }
}
