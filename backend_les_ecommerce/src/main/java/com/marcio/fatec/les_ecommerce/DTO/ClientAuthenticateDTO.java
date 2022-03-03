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
public class ClientAuthenticateDTO {

    private String email;

    private String password;

    public ClientAuthenticateDTO( Client client){
        this.email = client.getEmail();
        this.password = client.getPassword();
    }
}
