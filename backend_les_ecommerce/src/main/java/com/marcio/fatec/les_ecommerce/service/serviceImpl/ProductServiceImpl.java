package com.marcio.fatec.les_ecommerce.service.serviceImpl;

import com.marcio.fatec.les_ecommerce.domain.Product;
import com.marcio.fatec.les_ecommerce.repository.ProductRepository;
import com.marcio.fatec.les_ecommerce.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class ProductServiceImpl implements IProductService {

    @Autowired
    ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {

        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Product product) {



        return null;
    }

    @Override
    public Optional<Product> setToDisable(Long id) {
        Optional<Product>  product = productRepository.findById(id);

        if(product.get().isDeleted() == true){
            product.get().setUpdatedDate(LocalDateTime.now());
            product.get().setDeletedDate(LocalDateTime.now());
            product.get().setDeleted(false);
            productRepository.save(product.get());

        }else{
            product.get().setUpdatedDate(LocalDateTime.now());
            product.get().setDeletedDate(LocalDateTime.now());
            product.get().setDeleted(true);
            productRepository.save(product.get());
        }

        return product;
    }
}
