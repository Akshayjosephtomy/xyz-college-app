import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myrouter:Router) { }

  name=""
  password=""

  login=()=>{
    let data={
      "name":this.name,
      "password":this.password
    }
    if (this.name=="admin" && this.password=="admin") {
      alert("Login Successfull")
      this.myrouter.navigate(["/addstudent"])
    } else {
      alert("Invalid Credintials")
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
