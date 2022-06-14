package com.marcio.fatec.les_ecommerce.DTO;


import com.marcio.fatec.les_ecommerce.domain.Client;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    private String type;

    private String areaCode;

    private String phoneNumber;

    public ClientDetailsDTO(Client client) {
        this.email = client.getEmail();
        this.name = client.getName();
        this.cpf = client.getCpf();
        this.birthDate = client.getBirthDate().toString();
        this.gender = client.getGender().name();
        this.type = client.getType().toString();
        this.areaCode = client.getAreaCode();
        this.phoneNumber = client.getPhoneNumber();
    }

}
