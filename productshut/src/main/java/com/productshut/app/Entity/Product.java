package com.productshut.app.Entity;


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

    @Column(length = 20, nullable = false)
    private String productName ;

    @Column(length = 20, nullable = false)
    private String productType ;

    private double price ;

    private String productModel ;

    private boolean isBought ;

    private boolean isAvailable ;

}
