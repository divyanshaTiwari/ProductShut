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
	@Column(name = "timeSlotId")
	private int timeSlotId;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name="emp_id", nullable=false)
	private Employee employee;
	
	@Column(name = "morning")
	private boolean morning;
	
	@Column(name = "afternoon")
	private boolean afternoon;
	
	@Column(name = "evening")
	private boolean evening;
	
	@Column(name = "date")
	private Date date;

}
