package com.example.CRUD_Example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.CRUD_Example.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

	List<Product> findByName(String name);


}
