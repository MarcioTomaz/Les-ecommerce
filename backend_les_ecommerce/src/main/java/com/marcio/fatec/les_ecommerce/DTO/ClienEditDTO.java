package com.marcio.fatec.les_ecommerce.DTO;

import com.marcio.fatec.les_ecommerce.domain.Enums.Gender;
import com.marcio.fatec.les_ecommerce.domain.Enums.PhoneType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClienEditDTO {

    private Long client;

    private String name;

    private String cpf;

    private String email;

    private LocalDate birthDate;

    private PhoneType type;

    private String areaCode;

    private String phoneNumber;

    private Gender gender;
}
