package com.marcio.fatec.les_ecommerce.service.serviceImpl;

import com.marcio.fatec.les_ecommerce.DTO.CreditCardDTO;
import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.CreditCard;
import com.marcio.fatec.les_ecommerce.repository.ClientRepository;
import com.marcio.fatec.les_ecommerce.repository.CreditCardRepository;
import com.marcio.fatec.les_ecommerce.service.IClientService;
import com.marcio.fatec.les_ecommerce.service.ICreditCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CreditCardServiceImpl implements ICreditCardService {

    @Autowired
    private CreditCardRepository creditCardRepository;

    @Override
    public List<CreditCardDTO> getAllCreditCards(Long id) {

        List<CreditCard> result = creditCardRepository.findAllCreditCardByClientIdAndDeletedFalse(id);


        return (List<CreditCardDTO>) result.stream().collect(Collectors.toList()).stream().map(x -> new CreditCardDTO(x));
    }

//    @Override
//    public List<CreditCardDTO> getAllCreditCards(Long id){

//        List<CreditCardDTO> result = creditCardRepository.findAllCreditCardByClientIdAndDeletedFalse(id);
//
//        return result.map(x -> new CreditCardDTO(x));
//    }
}
