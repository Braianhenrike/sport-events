package com.SportEvent.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SportEvent.entities.Product;

public interface ProductRepository extends JpaRepository<Product, String> {
}