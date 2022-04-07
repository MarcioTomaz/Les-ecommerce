package com.marcio.fatec.les_ecommerce.domain;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.ArrayList;
import java.util.List;

//@Getter
//@Setter
//@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)
////@Scope("session")
////@Component


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "_cart")
public class Cart extends DomainEntity{

    @OneToOne
    private Client client;

    @OneToMany( cascade = {CascadeType.PERSIST, CascadeType.MERGE })
    private List<ItemOrder> itemOrders;
}
