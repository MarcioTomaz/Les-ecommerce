package com.marcio.fatec.les_ecommerce.domain;

import com.marcio.fatec.les_ecommerce.DTO.CouponDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "_coupon")
public class Coupon extends DomainEntity {

    @NotNull
    @NotBlank(message = "O código não pode estar vazio")
    @Size(min = 6)
    private String code;

    private Integer amount;

    @Min(value = 1, message = "O Valor deve ser maior que 0")
    private Double value;

    public Coupon(CouponDTO couponDTO) {
        this.code = couponDTO.getCode();
        this.amount = couponDTO.getAmount();
        this.value = couponDTO.getValue();
    }
}
