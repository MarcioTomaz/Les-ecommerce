package com.marcio.fatec.les_ecommerce.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderExchangeDTO {

    private List<Long> idList;

    private Integer orderId;

    private String reason;
}
