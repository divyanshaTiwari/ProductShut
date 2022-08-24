package com.productshut.app.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.productshut.app.Entity.Admin;
import com.productshut.app.Service.AdminService;

@RestController
//@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	AdminService adminServ;

	@PostMapping("/login")
	public String login(@RequestBody Admin admin) {
		
		int checkAdmin = adminServ.loginServ(admin);
		if(checkAdmin != 0) {
			return "login successfull"; // success login
		} else {
			return "login failed";
		}
	}
}
