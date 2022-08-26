import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../AdminLogin/admin.service';
import { Employee } from './Employee';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  employees !: Employee[];
  ishiddenForAdd : boolean = true;
  ishiddenForEdit : boolean = true;
  employee : Employee = new Employee();
  employeeForAdding : Employee = new Employee();
  check : Employee = new Employee();
  checkForAdd !: Number;
  constructor(private adminServ : AdminService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('adminId') == null) {
      alert("Unauthorised Access");
      this.router.navigate(['/']);
    }
    this.getAllEmployee();
  }

  test() {
    alert("Button clicked");
  }
  getAllEmployee() {

    this.adminServ.fetchEmployeeData().subscribe(
      data => {
        this.employees = data;
      }

    );
  }
  addEmployee() {
    this.ishiddenForAdd = false;
    this.ishiddenForEdit = true;
  }
  editEmp(emp : Employee) {
    console.log(emp.empId);
    this.employee.empId = emp.empId;
    this.employee.empName = emp.empName;
    this.employee.phoneNo = emp.phoneNo;
    this.ishiddenForEdit = false;
    this.ishiddenForAdd = true;
  }

  updateEmployee(form : NgForm) {
    console.log("insisde updateEmployee : " + form.value.empId);
    this.employee.empId = form.value.empId;
    this.employee.empName = form.value.empName;
    this.employee.phoneNo = form.value.phoneNo;
    this.adminServ.updateEmp(this.employee).subscribe(
      data => {
        this.check = data;
        console.log(this.check);
        if(this.check == null) {
          alert("SOmething went wrong");
        } else {
          alert("Updated successfully!");
          window.location.reload();
        }
      }
    );
    
  }
  addEmp(form : NgForm) {
    this.employeeForAdding.empName = form.value.empName;
    this.employeeForAdding.phoneNo = form.value.phoneNo;
    this.adminServ.addEmp(this.employeeForAdding).subscribe(
      data => {
        this.checkForAdd = data;
        console.log(this.checkForAdd);
        if(this.checkForAdd == 1) {
          alert("Employee added successfully!");
          window.location.reload();
        } else {
          alert("SOmething went wrong");
        }
      }
    );
  }
}
