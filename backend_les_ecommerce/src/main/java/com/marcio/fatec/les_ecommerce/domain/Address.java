package com.marcio.fatec.les_ecommerce.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.marcio.fatec.les_ecommerce.domain.Enums.AddressType;
import com.marcio.fatec.les_ecommerce.domain.Enums.Logradouro;
import com.marcio.fatec.les_ecommerce.domain.Enums.State;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
//@NoArgsConstructor
@AllArgsConstructor
@Table( name= "_address")
@Entity
public class Address extends DomainEntity{

    @ManyToOne(optional = true)
    @JsonIgnore
    private Client client;

    @Column(name = "street", nullable = false, length = 50)
    private String street;

    @Column(name = "number", nullable = false,length = 5)
    private String number;

    @Column(name = "district", nullable = false, length = 50)
    private String district;

    @Column(name = "zipCode",nullable = false, length = 8)
    private String zipCode; //cep

    @Column(name = "logradouro", nullable = false, length = 20)
    private Logradouro logradouro;

    @Column(name = "city",length = 50)
    private City city;

    @Column(name = "addressType", nullable = false, length = 30)
    @Enumerated(EnumType.STRING)
    private AddressType addressType;

}
