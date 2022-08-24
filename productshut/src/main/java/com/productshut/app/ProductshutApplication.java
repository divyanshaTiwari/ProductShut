package com.productshut.app;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.productshut.app.DAO.EmployeeDAO;
import com.productshut.app.Entity.Employee;

@SpringBootApplication
public class ProductshutApplication {


	public static void main(String[] args) {
		SpringApplication.run(ProductshutApplication.class, args);
//		ConfigurableApplicationContext _context = SpringApplication.run(ProductshutApplication.class, args);
//		
//		EmployeeDAO empDAO = _context.getBean(EmployeeDAO.class);
//		
//		Employee emp = new Employee();
//		emp.setEmpName("Demo");
//		emp.setPhoneNo("864589045");
//		
//		Employee emp1 = new Employee();
//		emp1.setEmpName("Demo");
//		emp1.setPhoneNo("864589045");
//		
//		List<Employee> employeeList = new ArrayList<>();
//		
//		employeeList.add(emp);
//		employeeList.add(emp1);
//		
//		empDAO.saveAll(employeeList);
	}

}
