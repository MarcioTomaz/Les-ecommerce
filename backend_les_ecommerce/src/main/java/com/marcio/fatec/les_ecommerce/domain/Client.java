package com.marcio.fatec.les_ecommerce.domain;

import com.marcio.fatec.les_ecommerce.DTO.ClienEditDTO;
import com.marcio.fatec.les_ecommerce.DTO.ClientDTO;
import com.marcio.fatec.les_ecommerce.DTO.ClientdDeleteDTO;
import com.marcio.fatec.les_ecommerce.domain.Enums.Gender;
import com.marcio.fatec.les_ecommerce.domain.Enums.PhoneType;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table( name= "_client")
@Entity
public class Client extends DomainEntity{

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "cpf")
    private String cpf;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Transient
    private String confirmPassword;

    @Column(name = "birthDate")
    private LocalDate birthDate;

    @Column(name = "PhoneType")
    @Enumerated( EnumType.STRING)
    private PhoneType type;

    @Column(name = "areaCode")//DDD
    private String areaCode;

    @Column( name = "phoneNumber")
    private String phoneNumber;

    @Column( name = "gender")
    @Enumerated( EnumType.STRING)
    private Gender gender;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Address> addressList;
    //
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CreditCard> creditCard;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Cart cart;

    public Client(ClientDTO clientDTO) {
        this.name = clientDTO.getName();
        this.cpf = clientDTO.getCpf();
        this.email = clientDTO.getEmail();
        this.password = clientDTO.getPassword();
        this.confirmPassword = clientDTO.getConfirmPassword();
        this.birthDate = clientDTO.getBirthDate();
        this.type = clientDTO.getType();
        this.areaCode = clientDTO.getAreaCode();
        this.phoneNumber = clientDTO.getPhoneNumber();
        this.gender = clientDTO.getGender();
    }

    public Client(ClienEditDTO clienEditDTO) {

        Client client = new Client();
        client.setId(clienEditDTO.getClient());

        this.setId(client.getId());
        this.name = clienEditDTO.getName();
        this.cpf = clienEditDTO.getCpf();
        this.email = clienEditDTO.getEmail();
        this.birthDate = clienEditDTO.getBirthDate();
        this.type = clienEditDTO.getType();
        this.areaCode = clienEditDTO.getAreaCode();
        this.phoneNumber = clienEditDTO.getPhoneNumber();
        this.gender = clienEditDTO.getGender();
    }

    public Client(ClientdDeleteDTO dto){
        Client client = new Client();
        client.setId(dto.getClient());

        this.setId(client.getId());
    }

}
