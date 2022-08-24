package com.productshut.app.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productshut.app.DAO.ProductDAO;
import com.productshut.app.Entity.Product;

@Service
public class ProductService {
	
	@Autowired
	ProductDAO productDAO;
	
	Product check;
	
	/*
	 * add product
	 * @param prod
	 * @return integer
	 */
	public int saveProduct(Product prod) {
		
		check = productDAO.saveAndFlush(prod);
		if(check != null) {
			return 1; //record added
		} else {
			return 0; //record not added
		}
	}

}
