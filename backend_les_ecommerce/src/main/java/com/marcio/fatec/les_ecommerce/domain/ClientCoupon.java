package com.marcio.fatec.les_ecommerce.domain;

import com.marcio.fatec.les_ecommerce.DTO.CouponClientDTO;
import com.marcio.fatec.les_ecommerce.DTO.CouponDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "_exchangeCoupon")
public class ClientCoupon extends DomainEntity {

    @ManyToOne
    private Client client;

//    @NotNull
//    @NotBlank(message = "O código não pode estar vazio")
//    private String code;

    @NotNull
    @NotBlank(message = "O código não pode estar vazio")
    private String code;

    @Min(value = 1, message = "A quantidade deve ser maior que 0")
    private Integer amount = 1;

    @Min(value = 1, message = "O Valor deve ser maior que 0")
    private Double value;

    public ClientCoupon(CouponDTO couponDTO) {
        this.code = couponDTO.getCode();
        this.amount = couponDTO.getAmount();
        this.value = couponDTO.getValue();
    }
}
