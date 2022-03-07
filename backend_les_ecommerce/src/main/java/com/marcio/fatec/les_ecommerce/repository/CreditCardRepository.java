package com.marcio.fatec.les_ecommerce.repository;

import com.marcio.fatec.les_ecommerce.domain.CreditCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreditCardRepository extends JpaRepository<CreditCard, Long> {

//    public CreditCard findByIdAndDeleteFalse();
}
