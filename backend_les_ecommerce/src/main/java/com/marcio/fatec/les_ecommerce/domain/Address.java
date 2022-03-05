package com.marcio.fatec.les_ecommerce.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.marcio.fatec.les_ecommerce.DTO.AddressDTO;
import com.marcio.fatec.les_ecommerce.domain.Enums.AddressType;
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

    public Address(AddressDTO addressDTO) {

        Client client = new Client();
        client.setId(addressDTO.getClient());

        this.client = client;

        this.street = addressDTO.getStreet();
        this.residencyType = addressDTO.getResidencyType();
        this.observation = addressDTO.getObservation();
        this.number = addressDTO.getNumber();
        this.district = addressDTO.getDistrict();
        this.zipCode = addressDTO.getZipCode();
        this.logradouro = addressDTO.getLogradouro();
        this.city = addressDTO.getCity();
        this.country = addressDTO.getCountry();
        this.state = addressDTO.getState();
        this.addressType = addressDTO.getAddressType();
    }
}
