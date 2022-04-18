package com.marcio.fatec.les_ecommerce.repository;

import com.marcio.fatec.les_ecommerce.domain.Cart;
import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    Optional<Order> findByClient(Client client);

    List<Order> findAllOrdersByClient(Client client);

}
