package com.productshut.app.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.productshut.app.Entity.Product;

@RestController
@RequestMapping("/admin")
public class ProductController {
	
	@Autowired
	ProductController prodServ;

	@PostMapping("/addProduct")
	public int addProducts(Product product) {
		
		int check = prodServ.addProducts(product);
		if(check == 1) {
			return 1;
		} else {
			return 0;
		}
	}
}
