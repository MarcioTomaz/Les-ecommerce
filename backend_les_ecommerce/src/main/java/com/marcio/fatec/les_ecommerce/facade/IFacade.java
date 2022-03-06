package com.marcio.fatec.les_ecommerce.facade;

import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.domain.Result;

public interface IFacade {

    public Result save(DomainEntity domainEntity);
    public Result update(DomainEntity domainEntity);
    public Result delete(DomainEntity domainEntity);
    public Result list(DomainEntity domainEntity);
    public Result get(DomainEntity domainEntity);
}
