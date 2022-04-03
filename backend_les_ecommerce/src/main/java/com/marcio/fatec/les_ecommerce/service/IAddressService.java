package com.marcio.fatec.les_ecommerce.service;

import com.marcio.fatec.les_ecommerce.DTO.AddressDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IAddressService {

    List<AddressDTO> getAllAddress(Long id);
}
