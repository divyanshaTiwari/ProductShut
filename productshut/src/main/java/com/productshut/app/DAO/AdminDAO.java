package com.productshut.app.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.productshut.app.Entity.Admin;

public interface AdminDAO extends JpaRepository<Admin, Integer>{

	@Query(value = "select admin_id from Admin  where admin_id = :adminId", nativeQuery = true)
	public int checkCredentials(@Param("adminId") int adminId);
}
