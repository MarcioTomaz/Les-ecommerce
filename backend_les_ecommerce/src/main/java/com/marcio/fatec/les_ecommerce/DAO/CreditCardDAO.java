package com.marcio.fatec.les_ecommerce.DAO;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.CreditCard;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.repository.CreditCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class CreditCardDAO implements IDAO{

    @Autowired
    CreditCardRepository creditCardRepository;

    @Override
    public DomainEntity create(DomainEntity domainEntity) {

        CreditCard creditCard = (CreditCard) domainEntity;

        creditCardRepository.save(creditCard);

        return creditCard;
    }

    @Override
    public void delete(Long id) {
        CreditCard creditCard = (CreditCard) get(id);
        creditCard.setDeletedDate(LocalDateTime.now());
        creditCard.setDeleted(true);

        creditCardRepository.save(creditCard);
    }

    @Override
    public void update(DomainEntity domainEntity) {
    }

    @Override
    public List<DomainEntity> list(DomainEntity domainEntity) {
        return null;
    }

    @Override
    public DomainEntity get(Long id) {

        CreditCard creditCard = null;

        creditCard = creditCardRepository.findById(id).get();

        if( creditCard.isDeleted() ){
            throw new IllegalArgumentException(" Email inválida. ");
        }


        return creditCard;
    }
}
