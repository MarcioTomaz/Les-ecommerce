package com.marcio.fatec.les_ecommerce.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CouponDTO {

    @NotNull
    @NotBlank(message = "O código não pode estar vazio")
    @Size(min = 6)
    private String code;

    @Min(value = 1, message = "A quantidade deve ser maior que 0")
    private Integer amount;

    @Min(value = 1, message = "O Valor deve ser maior que 0")
    private Double value;
}
