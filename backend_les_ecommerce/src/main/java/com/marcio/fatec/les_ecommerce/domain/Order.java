package com.marcio.fatec.les_ecommerce.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.marcio.fatec.les_ecommerce.domain.Enums.ProductStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@Entity(name = "_order")
public class Order extends DomainEntity {

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime deliveryDate;

    private Double total;

    private String code;

    private Double shippingTax;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    @ManyToMany
    private List<ItemOrder> itemList;

    @Enumerated(EnumType.ORDINAL)
    private ProductStatus status;

    @OneToOne
    private Address billingAddress;

    @OneToOne
    private Address deliveryAddress;

    @ManyToMany
    private List<PaymentMethod> paymentMethodList;

    @ManyToOne
    @JoinColumn(name = "coupon_id")
    private Coupon coupon;

//    @OneToOne(mappedBy = "order")
//    @JsonIgnore
//    private Devolution devolution;

    @Transient
    private Integer amount;

    public Order() {
        this.status = ProductStatus.EM_PROCESSAMENTO;
    }
}