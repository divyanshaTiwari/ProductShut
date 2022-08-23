package com.productshut.app.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.productshut.app.DAO.EmployeeDAO;
import com.productshut.app.Entity.Employee;
import com.productshut.app.Service.EmployeeService;

@RestController
public class EmployeeController {
	
	@Autowired
	EmployeeService empServ;
	
	@GetMapping("/emp")
	public List<Employee> retreiveAllmEployee() {
		return empServ.getALlEmp();
	}

}
