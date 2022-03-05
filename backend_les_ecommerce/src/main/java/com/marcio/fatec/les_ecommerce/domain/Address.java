package com.marcio.fatec.les_ecommerce.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.marcio.fatec.les_ecommerce.domain.Enums.AddressType;
import com.marcio.fatec.les_ecommerce.domain.Enums.Logradouro;
import com.marcio.fatec.les_ecommerce.domain.Enums.State;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
//@NoArgsConstructor
@AllArgsConstructor
@Table( name= "_address")
@Entity
public class Address extends DomainEntity{

    //Todo cadastro de endereços associados a clientes deve ser composto dos seguintes dados: Tipo de residência
    // (Casa, Apartamento etc.), Tipo Logradouro, Logradouro, Número, Bairro, CEP, Cidade, Estado e País.
    // Todos os campos anteriores são de preenchimento obrigatório. Opcionalmente pode ser preenchido um campo observações.

    @ManyToOne(optional = true)
    @JsonIgnore
    private Client client;

    @Column(name = "street", nullable = false, length = 50)
    private String street;

    @Column(name = "residencyType", nullable = false, length = 50)
    private String residencyType;

    @Column(name = "observation", nullable = true, length = 50)
    private String observation;

    @Column(name = "number", nullable = false,length = 5)
    private String number;

    @Column(name = "district", nullable = false, length = 50)
    private String district; //bairro

    @Column(name = "zipCode",nullable = false, length = 8)
    private String zipCode; //cep

    @Column(name = "logradouro", nullable = false, length = 20)
    private String logradouro;

    @Column(name = "city",length = 50)
    private String city;

    @Column(name = "country",length = 50)
    private String country;

    @Column(name = "state")
    private String state;

    @Column(name = "addressType", nullable = false, length = 30)
    private AddressType addressType;

    public Address() {
        this.client = client;
        this.street = street;
        this.residencyType = residencyType;
        this.observation = observation;
        this.number = number;
        this.district = district;
        this.zipCode = zipCode;
        this.logradouro = logradouro;
        this.city = city;
        this.country = country;
        this.state = state;
        this.addressType = addressType;
    }
}
