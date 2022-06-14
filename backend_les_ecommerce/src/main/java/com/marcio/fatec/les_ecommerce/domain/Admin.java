package com.marcio.fatec.les_ecommerce.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table( name= "_admin")
@Entity
public class Admin extends DomainEntity{


    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;


}
