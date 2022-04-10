package com.marcio.fatec.les_ecommerce.DTO;

import com.marcio.fatec.les_ecommerce.domain.Address;
import com.marcio.fatec.les_ecommerce.domain.Enums.AddressType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddressEditDTO {

    private Long client;
    private Long id;

    private String street;
    private String residencyType;
    private String observation;
    private String number;
    private String district;
    private String zipCode;
    private String logradouro;
    private String city;
    private String country;
    private String state;
    private AddressType addressType;

    public AddressEditDTO(Address address){

        this.client = address.getClient().getId();
        this.street = address.getStreet();
        this.residencyType = address.getResidencyType();
        this.observation = address.getObservation();
        this.number = address.getNumber();
        this.district = address.getDistrict();
        this.zipCode = address.getZipCode();
        this.logradouro = address.getLogradouro();
        this.city = address.getCity();
        this.country = address.getCountry();
        this.state = address.getState();
    }


}
