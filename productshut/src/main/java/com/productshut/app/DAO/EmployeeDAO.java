package com.productshut.app.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.productshut.app.Entity.Employee;

public interface EmployeeDAO extends JpaRepository<Employee, Integer>{

	
}
