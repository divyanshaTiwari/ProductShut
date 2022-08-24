package com.productshut.app.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.productshut.app.Entity.Order;

public interface OrderDAO extends JpaRepository<Order, Integer> {

}
