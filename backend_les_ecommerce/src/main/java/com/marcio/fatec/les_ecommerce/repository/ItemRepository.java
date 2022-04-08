package com.marcio.fatec.les_ecommerce.repository;

import com.marcio.fatec.les_ecommerce.domain.Cart;
import com.marcio.fatec.les_ecommerce.domain.ItemOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<ItemOrder, Long> {

    @Query(value = "select * from _cart as c\n" +
            "    join _item_order as i\n" +
            "    on c.id = i.cart_id " +
            " WHERE c.client_id = :id", nativeQuery = true)
    List<ItemOrder> findByCartteste(@Param("id") Long id);

    List<ItemOrder> findByCart(Cart cart);
}
