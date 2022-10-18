import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallstudent',
  templateUrl: './viewallstudent.component.html',
  styleUrls: ['./viewallstudent.component.css']
})
export class ViewallstudentComponent implements OnInit {

  constructor() { }

  viewStudent=[{"name":"abhijith","roll":"1","adm":"123","department":"computer science","college":"abc college","blood":"A+","dob":"22/06/2002","parent":"anil","parentemail":"anil@gmail.com","guardian":"ansen","address":"address 1"},{"name":"ali","roll":"1","adm":"123","college":"abc college","department":"mechanical","blood":"A+","dob":"22/06/2002","parent":"anil","parentemail":"anil@gmail.com","guardian":"ansen","address":"address 1"},{"name":"anandh","roll":"1","adm":"123","college":"abc college","department":"civil","blood":"A+","dob":"22/06/2002","parent":"anil","parentemail":"anil@gmail.com","guardian":"ansen","address":"address 1"},{"name":"arun","roll":"1","adm":"123","college":"abc college","department":"electronics","blood":"A+","dob":"22/06/2002","parent":"anil","parentemail":"anil@gmail.com","guardian":"ansen","address":"address 1"},{"name":"aswin","roll":"1","adm":"123","college":"abc college","department":"civil","blood":"A+","dob":"22/06/2002","parent":"anil","parentemail":"anil@gmail.com","guardian":"ansen","address":"address 1"}]

  ngOnInit(): void {
  }

}
