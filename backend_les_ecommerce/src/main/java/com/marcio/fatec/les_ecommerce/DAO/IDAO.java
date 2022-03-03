package com.marcio.fatec.les_ecommerce.DAO;

import com.marcio.fatec.les_ecommerce.domain.DomainEntity;

import java.util.List;

public interface IDAO {

    public DomainEntity create(DomainEntity domainEntity);
    public DomainEntity delete(Long id);
    public DomainEntity update(DomainEntity domainEntity);
    public List<DomainEntity> list(DomainEntity domainEntity);
}
