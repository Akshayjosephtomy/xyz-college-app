import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor() { }

  status:boolean=false

  name=""
  department=""
  designation=""
  dob=""
  education=""
  address=""
  mobile=""
  doj=""

  readValue=()=>{
    let data={
      "name":this.name,
      "department":this.department,
      "designation":this.designation,
      "dob":this.dob,
      "education":this.education,
      "address":this.address,
      "mobile":this.mobile,
      "doj":this.doj
    }
    console.log(data)
    alert("Faculty added Successfully")
    this.name="",
    this.department="",
    this.designation="",
    this.dob="",
    this.education="",
    this.address="",
    this.mobile="",
    this.doj=""
    this.status=true
  }

  ngOnInit(): void {
  }

}
