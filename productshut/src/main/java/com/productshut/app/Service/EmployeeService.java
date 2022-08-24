package com.productshut.app.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productshut.app.DAO.EmployeeDAO;
import com.productshut.app.Entity.Employee;

@Service
public class EmployeeService {

	@Autowired
	EmployeeDAO empDAO;
	
	Employee checkEmp;
	
	private static final List<Employee> empList = new ArrayList<>(); 
	
	public Employee save(Employee emp) {
		empList.add(emp);
		return emp;
	}
	
	/*
	 * Gets the list of Employees
	 */
	public List<Employee> getALlEmp() {
		
		return empDAO.findAll();
	}
	
	/*
	 * Adds Employees
	 * @param Employee object
	 * @return integer
	 */
//	public int addEmp(Employee employee) {
//		
//		checkEmp = empDAO.save(employee);
//		if(checkEmp != null) {
//			return 1; //record added
//		} else {
//			return 0; //record not added
//		}
//	}
	
	public Employee addEmp(Employee emp) {
		
		checkEmp = empDAO.save(emp);
		return checkEmp;
	}
	
	/*
	 * Adds Employees
	 * @param Employee object
	 */
	public void deleteEmp(Employee emp) {
	
		empDAO.deleteById(emp.getEmpId());
	}
	
	
}
