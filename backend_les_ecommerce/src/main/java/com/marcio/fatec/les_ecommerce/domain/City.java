package com.marcio.fatec.les_ecommerce.domain;

import com.marcio.fatec.les_ecommerce.domain.Enums.State;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
//@NoArgsConstructor
@AllArgsConstructor
@Table( name= "_city")
@Entity
public class City extends DomainEntity{

    @Column(name = "name")
    private String name;

    @Column(name = "state", nullable = false, length = 30)
    @Enumerated(EnumType.STRING)
    private State state;
}
