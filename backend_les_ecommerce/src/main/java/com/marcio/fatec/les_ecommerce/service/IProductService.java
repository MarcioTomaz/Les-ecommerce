package com.marcio.fatec.les_ecommerce.service;

import com.marcio.fatec.les_ecommerce.domain.Product;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IProductService {

//    Client saveClient(Client client);
    Product saveProduct(Product product);

    Optional<Product> setToDisable( Long id);
}
