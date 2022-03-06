package com.marcio.fatec.les_ecommerce.DAO;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;

import java.util.List;
import java.util.Optional;

public interface IDAO {

    public DomainEntity create(DomainEntity domainEntity);
    public void delete(Long id);
    public void update(DomainEntity domainEntity);
    public List<DomainEntity> list(DomainEntity domainEntity);
    public DomainEntity get(Long id);
}
