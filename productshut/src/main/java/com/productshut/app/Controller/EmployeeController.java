package com.productshut.app.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.productshut.app.DAO.EmployeeDAO;
import com.productshut.app.Entity.Employee;
import com.productshut.app.Entity.Product;
import com.productshut.app.Service.EmployeeService;

@RestController
//@RequestMapping("/admin")
public class EmployeeController {
	
	@Autowired
	EmployeeService empServ;
	
	@GetMapping("/emp")
	public List<Employee> retreiveAllmEployee() {
		return empServ.getALlEmp();
	}
	
	@PostMapping("/saveEmp")
	public int saveEmpData(@RequestBody Employee employee) {
		Employee check = empServ.addEmp(employee);
		if(check != null) {
			return 1;
		} else {
			return 0;
		}
	}
	
	@DeleteMapping("/deleteEmp")
	public void removeEmp(Employee employee) {
		empServ.deleteEmp(employee);
	}
	
	// update emp left for now
	
//	@PostMapping("/addProducts")
//	public void addProduct(Product product) {
//		
//	}
	
	@PostMapping("/addEmp")
	public ResponseEntity<Object> createEmp(@RequestBody Employee employee) {
		Employee savedEmp = empServ.save(employee);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}

}
