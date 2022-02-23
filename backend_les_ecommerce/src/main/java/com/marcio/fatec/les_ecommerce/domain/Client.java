package com.marcio.fatec.les_ecommerce.domain;

import com.marcio.fatec.les_ecommerce.domain.Enums.Gender;
import com.marcio.fatec.les_ecommerce.domain.Enums.PhoneType;
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
//@NoArgsConstructor
@AllArgsConstructor
@Table( name= "_client")
@Entity
public class Client extends DomainEntity{

//    Para todo cliente cadastrado é obrigatório o cadastro dos seguintes dados: Gênero, Nome, Data de Nascimento, CPF,
//    Telefone (deve ser composto pelo tipo, DDD e número), e-mail, senha, endereço residencial.

    @Column(name = "name")
    private String name;

    @Column(name = "cpf")
    private String cpf;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

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
    private Gender gender;

//    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private Usuario usuario;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Address> addressList;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CreditCard> creditCard;





}
