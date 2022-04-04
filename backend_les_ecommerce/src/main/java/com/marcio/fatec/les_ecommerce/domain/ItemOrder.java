package com.marcio.fatec.les_ecommerce.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
////@Table( name= "_itemOrder")
//@Entity
public class ItemOrder {

    private Product product;
    private Integer quantity;
}
