package com.marcio.fatec.les_ecommerce.DAO;

import com.marcio.fatec.les_ecommerce.domain.Address;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.repository.AddresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressDAO implements IDAO{


    @Autowired
    AddresRepository addresRepository;

    @Override
    public DomainEntity create(DomainEntity domainEntity) {

        Address address = (Address) domainEntity;

        addresRepository.save(address);

        return address;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public void update(DomainEntity domainEntity) {

    }

    @Override
    public List<DomainEntity> list(DomainEntity domainEntity) {
        return null;
    }
}
