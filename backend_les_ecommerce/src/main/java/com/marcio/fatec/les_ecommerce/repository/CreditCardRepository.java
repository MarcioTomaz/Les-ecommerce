package com.marcio.fatec.les_ecommerce.repository;

import com.marcio.fatec.les_ecommerce.domain.CreditCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface CreditCardRepository extends JpaRepository<CreditCard, Long> {

    List<CreditCard> findAllCreditCardByClientIdAndDeletedFalse(Long id);
}
