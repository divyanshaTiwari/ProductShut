import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private adminServ : AdminService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('adminId') != null) {
      sessionStorage.removeItem('adminId');
    }
  }

  login(form : NgForm) {

    //console.log(form.userName.value);
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

}
