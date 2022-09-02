import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer/Customer';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  loginDisabled : boolean;
  signUpDisabled : boolean;
  homePageDisabled : boolean;
  incorrectCredentials : boolean = true;
  loginForm : FormGroup;
  registerForm : FormGroup;
  formStatus;
  check : Customer = new Customer();
  registerCheck : Customer = new Customer();
  customer : Customer = new Customer();
  checkR : number = 0;
  registerCust : Customer = new Customer();
  constructor(private customerServ : CustomerService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.loginDisabled = true;
    this.signUpDisabled = true;
    this.homePageDisabled = false;
    
    
    if(sessionStorage.getItem('customerId') != null) {
      sessionStorage.removeItem('customerId');
    }

    this.loginForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email,this.noSpaceAllowed]),
      password : new FormControl('',[Validators.required,this.noSpaceAllowed])
    });

    this.registerForm = new FormGroup({
      name : new FormControl(' ',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z ]*')]),
      email : new FormControl(' ',[Validators.required,Validators.email,this.noSpaceAllowed]),
      phoneNo : new FormControl(' ',[Validators.required
      ,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]),
      address : new FormControl(' ',[Validators.required,Validators.minLength(4)]),
      password : new FormControl(' ',[Validators.required,this.noSpaceAllowed]),
      confirmPassword : new FormControl(' ',[Validators.required,this.noSpaceAllowed])
    });
  }
  checkP() {
    if(this.registerForm.get('password').value != this.registerForm.get('confirmPassword').value) {
      this.registerForm.get('confirmPassword').setErrors({noMatch : true});
    }
  }
  noSpaceAllowed(control : FormControl) {
    if(control.value != null && control.value.indexOf(' ') != -1) {
      return {noSpaceAllowed : true}
    }
    return null;
  }
  MatchValue(fgrp : FormGroup) {
    console.log("password : " + fgrp.get('password').value + "confirmPassword : " + fgrp.get('confirmPassword').value);
    return null;
  }
  login() {

    this.loginDisabled = false;
    this.homePageDisabled = true;
    this.signUpDisabled = true;
  }
  signUp() {
    this.signUpDisabled = false;
    this.homePageDisabled = true;
    this.loginDisabled = true;
  }

  customerLogin(form : FormGroup) {
    console.log("inside customer login : " + form);
    this.formStatus = this.loginForm.status;
    if(this.formStatus == 'INVALID') {
      // console.log("after : " + this.formStatus)
      this.loginForm.setErrors({'required' : true})
      this.loginForm.markAllAsTouched();
    } else {
      console.log("api calling");
      console.log(form.value);
      this.customer.emailId = form.value.email;
      this.customer.password = form.value.password;
      console.log("CUSTOMER : " + this.customer.emailId + " " + this.customer.password);
      this.customerServ.login(this.customer).subscribe(
        data => {
          this.check = data;
          console.log(this.check);
          if(this.check != null) {
            console.log("before logged alert print : " + this.check.customerId);
            sessionStorage.setItem('customerId',JSON.stringify(this.check.customerId));
            alert("logged");
            this.router.navigate(['/customerDashboard']);
          } else {
            alert("Check credentials or sign up");
            this.incorrectCredentials = false;
          }
        }
      );
  }
}
navigate() {

}
register(form : FormGroup) {
  console.log(form);
  if(form.status == 'VALID') {
    this.registerCust.customerName = form.get('name').value;
    this.registerCust.emailId = form.get('email').value;
    this.registerCust.password = form.get('password').value;
    this.registerCust.phoneNo = form.get('phoneNo').value;
    this.registerCust.address = form.get('address').value;
    this.customerServ.register(this.registerCust).subscribe(
      data => {
        this.registerCheck = data;
        console.log(this.registerCheck);
        if(this.registerCheck != null) {
          alert("registered")
          this.homePageDisabled = true;
          this.signUpDisabled = true;
          this.loginDisabled = false;
          this.router.navigate(['']);
        } else {
          alert("failed");
          

        }
      }
    );
  } else {
    this.registerForm.setErrors({'required' : true})
    this.registerForm.markAllAsTouched();
  }
  
}
}
