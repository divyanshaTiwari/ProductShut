package com.productshut.app.Entity;


import java.util.List;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int productId ;

    @Column(name = "productName", length = 20, nullable = false)
    private String productName ;

    @Column(name = "productType", length = 20, nullable = false)
    private String productType ;

    @Column(name = "price")
    private double price ;

    @Column(name = "productModel")
    private String productModel ;

    @Column(name = "isBought")
    private boolean isBought ;

    @Column(name = "isAvailable")
    private boolean isAvailable ;
    
    @OneToOne(mappedBy = "product", cascade = CascadeType.ALL)
    private Order order;

    
    
	/**
	 * @param productId
	 * @param productName
	 * @param productType
	 * @param price
	 * @param productModel
	 * @param isBought
	 * @param isAvailable
	 */
	public Product(int productId, String productName, String productType, double price, String productModel,
			boolean isBought, boolean isAvailable) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productType = productType;
		this.price = price;
		this.productModel = productModel;
		this.isBought = isBought;
		this.isAvailable = isAvailable;
	}

	/**
	 * @return the productId
	 */
	public int getProductId() {
		return productId;
	}

	/**
	 * @param productId the productId to set
	 */
	public void setProductId(int productId) {
		this.productId = productId;
	}

	/**
	 * @return the productName
	 */
	public String getProductName() {
		return productName;
	}

	/**
	 * @param productName the productName to set
	 */
	public void setProductName(String productName) {
		this.productName = productName;
	}

	/**
	 * @return the productType
	 */
	public String getProductType() {
		return productType;
	}

	/**
	 * @param productType the productType to set
	 */
	public void setProductType(String productType) {
		this.productType = productType;
	}

	/**
	 * @return the price
	 */
	public double getPrice() {
		return price;
	}

	/**
	 * @param price the price to set
	 */
	public void setPrice(double price) {
		this.price = price;
	}

	/**
	 * @return the productModel
	 */
	public String getProductModel() {
		return productModel;
	}

	/**
	 * @param productModel the productModel to set
	 */
	public void setProductModel(String productModel) {
		this.productModel = productModel;
	}

	/**
	 * @return the isBought
	 */
	public boolean isBought() {
		return isBought;
	}

	/**
	 * @param isBought the isBought to set
	 */
	public void setBought(boolean isBought) {
		this.isBought = isBought;
	}

	/**
	 * @return the isAvailable
	 */
	public boolean isAvailable() {
		return isAvailable;
	}

	/**
	 * @param isAvailable the isAvailable to set
	 */
	public void setAvailable(boolean isAvailable) {
		this.isAvailable = isAvailable;
	}
    
    

}
