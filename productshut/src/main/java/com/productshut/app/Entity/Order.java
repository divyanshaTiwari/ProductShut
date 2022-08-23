package com.productshut.app.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int orderId;
	
	@ManyToOne
	@JoinColumn(name="customerId", nullable=false)
	private Customer customerId;
	
	@ManyToOne
	@JoinColumn(name="productId", nullable=false)
	private Product productId;
	
	@OneToOne
	@JoinColumn(name="empId", nullable=false)
	private Employee empId;
	
	private Date dateOfOrder;
	
	
}
