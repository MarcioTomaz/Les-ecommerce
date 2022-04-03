package com.marcio.fatec.les_ecommerce.service.serviceImpl;

import com.marcio.fatec.les_ecommerce.DTO.AddressDTO;
import com.marcio.fatec.les_ecommerce.domain.Address;
import com.marcio.fatec.les_ecommerce.repository.AddresRepository;
import com.marcio.fatec.les_ecommerce.service.IAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AddressServiceImp implements IAddressService {

    @Autowired
    private AddresRepository addresRepository;

    @Override
    public List<AddressDTO> getAllAddress(Long id){
        List<Address> result = addresRepository.findAllAddressByClientIdAndDeletedFalse(id);

      return (List<AddressDTO>) result.stream().collect(Collectors.toList()).stream().map(x -> new AddressDTO(x));

    }
}
