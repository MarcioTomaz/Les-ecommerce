package com.marcio.fatec.les_ecommerce.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.marcio.fatec.les_ecommerce.DTO.AddressDTO;
import com.marcio.fatec.les_ecommerce.DTO.AddressEditDTO;
import com.marcio.fatec.les_ecommerce.domain.Enums.AddressType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table( name= "_address")
@Entity
public class Address extends DomainEntity{

    @ManyToOne(optional = true)
    @JsonIgnore
    private Client client;

    @Column(name = "street", nullable = false)
    private String street;

    @Column(name = "residencyType", nullable = false)
    private String residencyType;

    @Column(name = "observation", nullable = true)
    private String observation;

    @Column(name = "number", nullable = false)
    private String number;

    @Column(name = "district", nullable = false)
    private String district; //bairro

    @Column(name = "zipCode",nullable = false)
    private String zipCode; //cep

    @Column(name = "logradouro", nullable = false)
    private String logradouro;

    @Column(name = "city")
    private String city;

    @Column(name = "country",length = 50)
    private String country;

    @Column(name = "state")
    private String state;

    @Column(name = "addressType", nullable = false)
    @Enumerated(EnumType.STRING)
    private AddressType addressType;

    public Address(AddressDTO addressDTO) {

        Client client = new Client();
        client.setId(addressDTO.getClient());
        this.client = client;
//
//        this.setId(addressDTO.getId());
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


    public Address(AddressEditDTO addressDTO) {

        Client client = new Client();
        client.setId(addressDTO.getClient());
        this.client = client;

        this.setId(addressDTO.getId());
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
