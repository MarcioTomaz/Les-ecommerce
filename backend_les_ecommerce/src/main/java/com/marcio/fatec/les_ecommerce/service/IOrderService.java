package com.marcio.fatec.les_ecommerce.service;

import com.marcio.fatec.les_ecommerce.DTO.OrderDTO;
import com.marcio.fatec.les_ecommerce.domain.Order;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrderService {

    Order order(OrderDTO orderDTO);
}
