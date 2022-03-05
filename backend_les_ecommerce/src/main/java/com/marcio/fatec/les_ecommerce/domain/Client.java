package com.marcio.fatec.les_ecommerce.domain;

import com.marcio.fatec.les_ecommerce.DTO.ClientDTO;
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

    //    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private Usuario usuario;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Address> addressList;
//
//    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<CreditCard> creditCard;





}
