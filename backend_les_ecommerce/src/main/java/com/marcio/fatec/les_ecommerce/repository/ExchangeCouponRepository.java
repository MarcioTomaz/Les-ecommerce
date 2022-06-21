package com.marcio.fatec.les_ecommerce.repository;


import com.marcio.fatec.les_ecommerce.domain.ClientCoupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExchangeCouponRepository extends JpaRepository<ClientCoupon, Long> {
    ClientCoupon findByCode(String exchangeCode);
    List<ClientCoupon> findAllExchangeCouponByClientIdAndDeletedFalse(Long id);

}
