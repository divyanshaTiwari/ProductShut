package com.productshut.app.Entity;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Admin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int adminId;
	
	private String userName;
	
	private String password;

}
