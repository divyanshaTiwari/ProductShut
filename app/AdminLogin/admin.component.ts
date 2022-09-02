import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from './Admin';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginCheck : Admin = new Admin();
  admin !: Admin;
  isdisabled : boolean = true;
  loginForm : FormGroup;
  formStatus;

  constructor(private adminServ : AdminService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('adminId') != null) {
      sessionStorage.removeItem('adminId');
    }
    this.loginForm = new FormGroup({
      // new FormControl(default value, sync validator, asynvalidorts)
      userName : new FormControl(null, [Validators.required, this.noSpaceAllowed]),
      password : new FormControl(null, [Validators.required, this.noSpaceAllowed])
    });
    //console.log(this.loginForm);
  }

  login(form : FormGroup) {

    this.formStatus = this.loginForm.status;
    // console.log("before : " + this.formStatus)
    if(this.formStatus == 'INVALID') {
      // console.log("after : " + this.formStatus)
      this.loginForm.setErrors({'required' : true})
      this.loginForm.markAllAsTouched();
    } else {
      this.admin = form.value;
    console.log("userName : " + form.value.userName);
    console.log("password : " + form.value.userName);
    this.adminServ.loginCredentials(this.admin).subscribe(
      data => {
        this.loginCheck = data;
        console.log("check" + this.loginCheck);
      if(this.loginCheck != null) {
        console.log("Logged in");
        alert("logged in successfull");
        sessionStorage.setItem('adminId',JSON.stringify(this.loginCheck.adminId));
        this.router.navigate(['/adminHomePage']);
      } else {
        console.log("Fail");
        // alert("Wrong Credentials");
        this.isdisabled = false;
      }
      }
    );
    }
    //console.log(form.userName.value);

  }
  noSpaceAllowed(control : FormControl) {
    if(control.value != null && control.value.indexOf(' ') != -1) {
      return {noSpaceAllowed : true}
    }
    return null;
  }

  //async validator
  // emailNotAllowed(control : FormControl) : Promise<any> | Observable<any> {
  //   const response = new Promise((resolve,reject) => {
  //     setTimeout(() => {
  //       if(control.value === 'bla@gmail.com') {
  //         resolve({emailNotAllowed : true})
  //       } else {
  //         resolve(null)
  //       }
  //     }, 5000)
  //   })
  //   return response;
  // } 
  //Syntax for adding async will be : 
  //password : new FormControl(null, [Validators.required, this.noSpaceAllowed], this.emailNotAllowed)
}
