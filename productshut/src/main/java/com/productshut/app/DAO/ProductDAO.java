package com.productshut.app.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.productshut.app.Entity.Product;

public interface ProductDAO extends JpaRepository<Product, Integer> {

}
