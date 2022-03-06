package com.marcio.fatec.les_ecommerce.DAO;

import com.marcio.fatec.les_ecommerce.domain.Address;
import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.repository.AddresRepository;
import com.marcio.fatec.les_ecommerce.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class AddressDAO implements IDAO{


    @Autowired
    AddresRepository addresRepository;

    @Autowired
    ClientRepository clientRepository;

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

        Address address = (Address) domainEntity;
        address.setId(1L);
        address.setClient(((Address) domainEntity).getClient());

        Address editAddress = addresRepository.getById(address.getId());

        editAddress.setStreet(address.getStreet());
        editAddress.setResidencyType(address.getResidencyType());
        editAddress.setObservation(address.getObservation());
        editAddress.setNumber(address.getNumber());
        editAddress.setDistrict(address.getDistrict());
        editAddress.setZipCode(address.getZipCode());
        editAddress.setLogradouro(address.getLogradouro());
        editAddress.setCity(address.getCity());
        editAddress.setCountry(address.getCountry());
        editAddress.setState(address.getState());
        editAddress.setAddressType(address.getAddressType());

        addresRepository.save(editAddress);
    }

    @Override
    public List<DomainEntity> list(DomainEntity domainEntity) {
        List<Address> domains = new ArrayList<>();

         domains = addresRepository.findAllById(Collections.singleton(domainEntity.getId()));

        return Collections.singletonList((DomainEntity) domains);
    }

    @Override
    public DomainEntity get(Long id) {

        Address address = null;

        address = addresRepository.findById(id).get();

        return address;
    }
}
