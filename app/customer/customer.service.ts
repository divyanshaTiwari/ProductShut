import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private HttpClient : HttpClient) { }

  login(customer : Customer) : Observable<Customer> {
    return this.HttpClient.post<Customer>('http://localhost:8080/customerLogin',customer);
  }

  register(customer : Customer) : Observable<Customer> {
    return this.HttpClient.post<Customer>('http://localhost:8080/addCustomer',customer);
  }
}
