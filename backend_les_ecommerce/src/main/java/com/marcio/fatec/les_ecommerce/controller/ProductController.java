package com.marcio.fatec.les_ecommerce.controller;

import com.marcio.fatec.les_ecommerce.DTO.ProductDTO;
import com.marcio.fatec.les_ecommerce.domain.Product;
import com.marcio.fatec.les_ecommerce.repository.ProductRepository;
import com.marcio.fatec.les_ecommerce.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    IProductService productService;

    @PostMapping
    public ResponseEntity salvar(@Valid @RequestBody ProductDTO productDTO, BindingResult result){

        if(result.hasErrors()){
//            Map<String, String> errors = new HashMap<>();

            List<String> erros = new ArrayList<>();
            for(FieldError error: result.getFieldErrors()){

//                errors.put( error.getDefaultMessage());
                erros.add(error.getDefaultMessage());
            }

            return ResponseEntity.badRequest().body(erros);
        }

        Product product = new Product(productDTO);
        productRepository.save(product);

        return ResponseEntity.ok().body("Salvo com sucesso!");
    }

    @GetMapping("/produtos")
    public ResponseEntity getAllProducts(){

        List<Product> productList = new ArrayList<>();
//        productList = productRepository.findAllProductDeletedFalse();
        productList = productRepository.findByDeletedFalse();


        return ResponseEntity.ok().body(productList);
    }

    @PutMapping("/inativar")
    public Optional<Product> disableProduct(@RequestParam("id") Long id){
        Product product = new Product();

        product.setId(id);

        Optional<Product> productDisable = productService.setToDisable(id);

        return productDisable;
    }

    @GetMapping("/detalhesProduto")
    public ResponseEntity getProductDetails(@Param("id") Long id){

        Product product = new Product();

       product = productRepository.findProductById(id);

       return ResponseEntity.ok().body(product);
    }

    @PostMapping("/salvarEdit")
    public ResponseEntity saveEdit(@Valid @RequestBody ProductDTO productDTO, BindingResult result){

        Product product = new Product(productDTO);
        Product editProduct = productRepository.findProductById(productDTO.getId());

        productRepository.save(editProduct);

        return ResponseEntity.ok().body(editProduct);
    }


}
