package com.marcio.fatec.les_ecommerce.strategy;

import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import org.springframework.stereotype.Component;

@Component
public interface IStrategy {

    public String process(DomainEntity domainEntity);
}
