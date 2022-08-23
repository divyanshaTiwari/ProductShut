/**
 * 
 */
package com.productshut.app.Entity;

import java.util.Date;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author divyanshatiwari
 *
 */
@Entity
@Data
@NoArgsConstructor
@Table(name="timeslot")
public class TimeSlot {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int timeSlotId;
	
	@ManyToOne
	@JoinColumn(name="empId", nullable=false)
	private Employee empId;
	
	private boolean morning;
	
	private boolean afternoon;
	
	private boolean evening;
	
	private Date date;

}
