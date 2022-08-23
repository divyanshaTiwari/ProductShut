package com.productshut.app.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productshut.app.DAO.EmployeeDAO;
import com.productshut.app.Entity.Employee;

@Service
public class EmployeeService {

	@Autowired
	EmployeeDAO empDAO;
	
	public List<Employee> getALlEmp() {
		return empDAO.findAll();
       
	}
	
}
