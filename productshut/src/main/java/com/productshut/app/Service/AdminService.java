package com.productshut.app.Service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productshut.app.DAO.AdminDAO;
import com.productshut.app.Entity.Admin;

@Service
public class AdminService {
	
	@Autowired
	AdminDAO adminDAO;
	
    int checkAdmin;
	
	
	public int loginServ(Admin admin) {
		
		checkAdmin = adminDAO.checkCredentials(admin.getAdminId());
//		if(Integer(checkAdmin).equals(null) ) {
//			return 0; // success login
//		} else {
//			return 1;
//		}
		return 0;
	}

}
