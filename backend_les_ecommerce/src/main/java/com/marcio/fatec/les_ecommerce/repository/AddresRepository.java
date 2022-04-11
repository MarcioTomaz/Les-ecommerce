package com.marcio.fatec.les_ecommerce.repository;

import com.marcio.fatec.les_ecommerce.domain.Address;
import com.marcio.fatec.les_ecommerce.domain.CreditCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddresRepository extends JpaRepository<Address, Long> {

    List<Address> findAllAddressByClientIdAndDeletedFalse(Long id);

    //    select * from yg_ecommerce._address where address_type = 'COBRANCA' and client_id = 1
    @Query(value =" SELECT * FROM _address" +
            "           WHERE address_type = 'COBRANCA'" +
            "               and client_id = :id ", nativeQuery = true)
    List<Address> findAllAddresCobranca(@Param("id") Long id);

    @Query(value =" SELECT * FROM _address" +
            "           WHERE address_type = 'ENTREGA'" +
            "               and client_id = :id ", nativeQuery = true)
    List<Address> findAllAddresEntrega(@Param("id") Long id);

}
