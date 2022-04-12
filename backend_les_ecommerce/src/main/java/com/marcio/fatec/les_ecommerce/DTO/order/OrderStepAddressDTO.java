package com.marcio.fatec.les_ecommerce.DTO.order;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderStepAddressDTO {

    private Long addressCobranca;

    private Long addressEntrega;

    private Long orderId;
}
