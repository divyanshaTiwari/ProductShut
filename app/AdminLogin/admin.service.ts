import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../admin-home-page/Employee';
import { Product } from '../admin-home-page/Product';
import { Admin } from './Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // admin!: Admin;

  private baseURL = 'http://localhost:8080/admin';

  constructor( private HttpClient : HttpClient) { }

  loginCredentials(admin : Admin) :Observable<Admin> {
    // console.log("u: "+userName+" p: "+password);
    //this.admin.adminId = 1;
    // this.admin.userName = userName;
    // this.admin.password = password;
    return this.HttpClient.post<Admin>(`${this.baseURL}`+ `/login`,admin);
    // post<>("url",object);
  }
  fetchEmployeeData() :Observable<Employee[]>{

    return this.HttpClient.get<Employee[]>('http://localhost:8080/employee-admin/emp'); 
  }

  updateEmp(employee : Employee) :Observable<Employee> {
    return this.HttpClient.post<Employee>('http://localhost:8080/employee-admin/updateName',employee);
  }

  addEmp(employee : Employee) :Observable<Number> {
    return this.HttpClient.post<Number>('http://localhost:8080/employee-admin/add',employee);
  }
  
  deleteEmp(employee : Employee) :Observable<Employee> {
    return this.HttpClient.post<Employee>('http://localhost:8080/employee-admin/delete',employee);
  }
  fetchProduct() : Observable<Product[]> {
    return this.HttpClient.get<Product[]>('http://localhost:8080/product');
  }
  addProduct(prod : Product) : Observable<Number> {
    return this.HttpClient.post<Number>('http://localhost:8080/addProduct',prod);
  }
}
