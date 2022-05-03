package com.marcio.fatec.les_ecommerce.repository;


import com.marcio.fatec.les_ecommerce.domain.ExchangeCoupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExchangeCouponRepository extends JpaRepository<ExchangeCoupon, Long> {
    ExchangeCoupon findByCode(String exchangeCode);
}
