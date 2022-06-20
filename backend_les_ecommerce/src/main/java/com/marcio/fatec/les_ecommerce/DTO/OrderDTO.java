package com.marcio.fatec.les_ecommerce.DTO;

import com.marcio.fatec.les_ecommerce.domain.Enums.ProductStatus;
import com.marcio.fatec.les_ecommerce.domain.ItemOrder;
import com.marcio.fatec.les_ecommerce.domain.PaymentMethod;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime deliveryDate;

    private Double cartSubTotal;

    private String code;

    private String exchangeCode;

    private Long clientId;

    private Long addressCobranca;

    private Long addressEntrega;

    private List<ItemOrder> itemList;

    private ProductStatus status;

    private List<PaymentMethod> paymentMethodList;

    private List<Long> paymentMethodCardList;

    private Long coupon;
}
