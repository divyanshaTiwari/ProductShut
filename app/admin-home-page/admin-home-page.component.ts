import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../AdminLogin/admin.service';
import { Employee } from './Employee';
import { Product } from './Product';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  employees !: Employee[];
  products : Product[];
  ishiddenForAdd : boolean = true;
  ishiddenForEdit : boolean = true;
  isHiddenTable : boolean = false;
  isHiddenTableForProduct : boolean = false;
  ishiddenForAddProd : boolean = true;
  employee : Employee = new Employee();
  employeeForAdding : Employee = new Employee();
  productForAdding : Product = new Product();
  check : Employee = new Employee();
  checkForAdd !: Number;
  checkForAddProduct !: Number;
  checkForDelete : Employee = new Employee();
  employeeAction : boolean = false;
  productAction : boolean = true;
  isVisitedForEmp : boolean = false;
  isVisitedForProd : boolean = false;
  constructor(private adminServ : AdminService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('adminId') == null) {
      alert("Unauthorised Access");
      this.router.navigate(['/adminLogin']);
    }
    this.getAllEmployee();
    this.getAllProducts();
  }

  test() {
    alert("Button clicked");
  }
  getAllProducts() {

    this.adminServ.fetchProduct().subscribe(
      data => {
        this.products = data;
        console.log(this.products[0]);
      }
    );
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
    this.isHiddenTable = true;
  }
  addProduct() {
    this.isHiddenTableForProduct = true;
    this.ishiddenForAddProd = false;
  }
  editEmp(emp : Employee) {
    console.log(emp.empId);
    this.employee.empId = emp.empId;
    this.employee.empName = emp.empName;
    this.employee.phoneNo = emp.phoneNo;
    this.ishiddenForEdit = false;
    this.ishiddenForAdd = true;
    this.isHiddenTable = true;
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
          alert("Something went wrong");
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
          alert("Something went wrong");
        }
      }
    );
  }
  deleteEmp(emp : Employee) {

    console.log(emp.empId);
    this.adminServ.deleteEmp(emp).subscribe(
      data => {
        this.checkForDelete = data;
        console.log(this.checkForDelete);
        if(this.checkForDelete != null) {
          alert("Employee Deleted successfully!");
          window.location.reload();
        } else {
          alert("Something went wrong");
        }
      }
    );

  }
  addProd(form : NgForm) {
    console.log(form.value.isBought);
    if(form.value.isBought == "true") {
      this.productForAdding.bought = true;
    } else {
      this.productForAdding.bought = false;
    }
    this.productForAdding.productName = form.value.productName;
    this.productForAdding.price = form.value.price;
    this.productForAdding.productModel = form.value.productModel;
    this.productForAdding.productType = form.value.productType;
    this.adminServ.addProduct(this.productForAdding).subscribe(
      data => {
        this.checkForAddProduct = data;
        console.log(this.checkForAddProduct);
        if(this.checkForAddProduct == 1) {
          alert("Product added");
          window.location.reload();
        } else {
          alert("something went wrong");
        }
      }
    );
  }
  prodAction() {
    this.productAction = false;
    this.employeeAction = true;
    this.isVisitedForEmp = false;
    this.isVisitedForProd = true;
  }
  empAction() {
    console.log("inside func");
    this.productAction = true;
    this.employeeAction = false;
    this.isVisitedForEmp = true;
    this.isVisitedForProd = false;
  }
  logout() {
    sessionStorage.removeItem('adminId')
    this.router.navigate(['/adminLogin']);
  }
}
