package com.productshut.app.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.productshut.app.Entity.Employee;

@Repository
@Transactional
public interface EmployeeDAO extends JpaRepository<Employee, Integer>{

	
}
