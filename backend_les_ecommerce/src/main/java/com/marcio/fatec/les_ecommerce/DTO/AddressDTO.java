package com.marcio.fatec.les_ecommerce.DTO;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.Enums.AddressType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {

    private Client client;
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
}
