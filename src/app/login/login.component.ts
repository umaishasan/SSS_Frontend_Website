import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  email: string = "";
  pass: string = "";

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      Email: new FormControl('',Validators.required),
      Pass: new FormControl('',Validators.required)
    });
  }

  login(){
    if(this.email === "umais@gmail.com" && this.pass === "umais"){
      this.route.navigateByUrl('/teacher');
    }else{
      alert("Invalid Username or Password");
    }
  }

}
