import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }

  status:boolean=false

  name=""
  no=""
  adm=""
  college=""
  department=""
  blood=""
  dob=""
  pname=""
  pemail=""
  gname=""
  gaddress=""

  readValue=()=>{
    let data={
      "name":this.name,
      "no":this.no,
      "adm":this.adm,
      "college":this.college,
      "department":this.department,
      "blood":this.blood,
      "dob":this.dob,
      "pname":this.pname,
      "pemail":this.pemail,
      "gname":this.gname,
      "gaddress":this.gaddress
    }
    console.log(data)
    alert("Student added Successfully")
    this.name="",
    this.no="",
    this.adm="",
    this.college="",
    this.department="",
    this.blood="",
    this.dob="",
    this.pname="",
    this.pemail="",
    this.gname="",
    this.gaddress=""
    this.status=true
  }

  ngOnInit(): void {
  }

}
