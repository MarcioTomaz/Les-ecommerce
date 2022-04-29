package com.marcio.fatec.les_ecommerce.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.marcio.fatec.les_ecommerce.DTO.OrderDTO;
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

    private String reason;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    @OneToOne
    private Address billingAddress;

    @OneToOne
    private Address deliveryAddress;

//    @OneToMany
    @ManyToMany
    private List<ItemOrder> itemList;

    @Enumerated(EnumType.STRING)
    private ProductStatus status;

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
        this.deliveryDate = LocalDateTime.now();
    }

    public Order(OrderDTO orderDTO) {
//        Client client = new Client();
//        client.setId((orderDTO.getClientId()));
        this.client = client;

        this.total = orderDTO.getCartSubTotal();

        this.status = ProductStatus.EM_PROCESSAMENTO;
        this.deliveryDate = LocalDateTime.now();
        this.code = "code123";

//        Address billingAddress = new Address();
//        billingAddress.setId(orderDTO.getClientId());
//        this.billingAddress = billingAddress;
//
//        Address deliveryAddres = new Address();
//        deliveryAddres.setId(orderDTO.getAddressEntrega());
//        this.deliveryAddress = deliveryAddres;

        this.itemList = orderDTO.getItemList();
        this.paymentMethodList = orderDTO.getPaymentMethodList();
    }
}