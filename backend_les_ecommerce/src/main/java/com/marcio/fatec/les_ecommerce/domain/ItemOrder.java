package com.marcio.fatec.les_ecommerce.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "_itemOrder")
public class ItemOrder extends DomainEntity{

    @ManyToOne
    private Product product;

    private Long quantity;

    private Boolean exchange;

    @ManyToOne
    private Order order;

    @ManyToOne
    @JsonIgnore
    private Cart cart;
}
