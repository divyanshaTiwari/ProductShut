package com.productshut.app.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int customerId;
	
	@Column(nullable=false)
	private String customerName;
	
	@Column(nullable=false)
	private String emailId;
	
	@Column(nullable=false)
	private long phoneNo;
	
	@Column(nullable=false)
	private String address;

}
