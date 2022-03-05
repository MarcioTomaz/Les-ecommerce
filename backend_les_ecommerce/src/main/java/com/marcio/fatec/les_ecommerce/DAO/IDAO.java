package com.marcio.fatec.les_ecommerce.DAO;

import com.marcio.fatec.les_ecommerce.domain.DomainEntity;

import java.util.List;

public interface IDAO {

    public DomainEntity create(DomainEntity domainEntity);
    public void delete(Long id);
    public void update(DomainEntity domainEntity);
    public List<DomainEntity> list(DomainEntity domainEntity);
}
