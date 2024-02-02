package com.SportEvent.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.SportEvent.DTO.ProductRequestDTO;
import com.SportEvent.DTO.ProductResponseDTO;
import com.SportEvent.entities.Product;
import com.SportEvent.repositories.ProductRepository;

import java.util.List;

@RestController()
@RequestMapping("product")
public class ProductController {

    @Autowired
    ProductRepository repository;

    @PostMapping
    public ResponseEntity postProduct(@RequestBody ProductRequestDTO body){
        Product newProduct = new Product(body);

        this.repository.save(newProduct);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity getAllProducts(){
        List<ProductResponseDTO> productList = this.repository.findAll().stream().map(ProductResponseDTO::new).toList();

        return ResponseEntity.ok(productList);
    }
}