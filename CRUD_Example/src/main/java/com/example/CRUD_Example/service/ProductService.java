package com.example.CRUD_Example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.CRUD_Example.entity.Product;
import com.example.CRUD_Example.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository repository;
	
	//Insert single product
	public Product saveProduct(Product product) {
		return repository.save(product);
	}
	
	//Inserting multiple products
	public List<Product> saveProducts(List<Product> products) {
		return repository.saveAll(products);
	}
	
	//Fetch all products
	public List<Product> getProducts(){
		return repository.findAll();
	}
	
	//Fetch specific product by id
	public Product getProductById(int id) {
		return repository.findById(id).orElse(null);
	}
	
	//Fetch product by name
	public List<Product> getProductByName(String name){
		return repository.findByName(name);
	}
	
	//Delete product by id
	public String deleteProduct(int id) {
		repository.deleteById(id);
		return "Product removed!!";
	}
	
	//Update the product
	public Product updateProduct(Product product) {
		Product existingProduct = repository.findById(product.getId()).orElse(null);
		
		existingProduct.setName(product.getName());
		existingProduct.setQuantity(product.getQuantity());
		existingProduct.setPrice(product.getPrice());
		
		return repository.save(existingProduct);
	}
}
