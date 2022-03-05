package com.marcio.fatec.les_ecommerce.DAO;

import com.marcio.fatec.les_ecommerce.domain.CreditCard;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.repository.CreditCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    }

    @Override
    public void update(DomainEntity domainEntity) {
    }

    @Override
    public List<DomainEntity> list(DomainEntity domainEntity) {
        return null;
    }
}
