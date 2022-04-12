package com.marcio.fatec.les_ecommerce.DTO.order;

import com.marcio.fatec.les_ecommerce.domain.ItemOrder;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderStepProductsDTO {

    private Long clientId;

    private List<ItemOrder> itemOrders;
}
