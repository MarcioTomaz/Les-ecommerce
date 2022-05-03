package com.marcio.fatec.les_ecommerce.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ExchangeCouponCheckDTO {

    private String exchangeCode;

    private Integer amount;
}
