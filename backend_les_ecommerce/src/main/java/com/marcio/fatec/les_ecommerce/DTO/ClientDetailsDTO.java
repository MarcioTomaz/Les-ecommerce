package com.marcio.fatec.les_ecommerce.DTO;


import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.Enums.Gender;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClientDetailsDTO {

    private String email;

    private String name;

    private String cpf;

    private String birthDate;

    private String gender;

    private String phoneNumber;

    public ClientDetailsDTO(Client client) {
        this.email = client.getEmail();
        this.name = client.getName();
        this.cpf = client.getCpf();
        this.birthDate = client.getBirthDate().toString();
        this.gender = client.getGender().name();
        this.phoneNumber = client.getPhoneNumber();
    }
}
