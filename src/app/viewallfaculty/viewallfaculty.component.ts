import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallfaculty',
  templateUrl: './viewallfaculty.component.html',
  styleUrls: ['./viewallfaculty.component.css']
})
export class ViewallfacultyComponent implements OnInit {

  constructor() { }

  viewFaculty=[{"name":"Akshay","department":"mechanical","designation":"teacher","dob":"30/04/2001","education":"BCA","address":"address 1","mobile":"9090909090","doj":"11/07/2022"},{"name":"Ajay","department":"mechanical","designation":"teacher","dob":"30/04/2001","education":"BCA","address":"address 1","mobile":"9090909090","doj":"11/07/2022"},{"name":"Akash","department":"mechanical","designation":"teacher","dob":"30/04/2001","education":"BCA","address":"address 1","mobile":"9090909090","doj":"11/07/2022"},{"name":"Anandhu","department":"mechanical","designation":"teacher","dob":"30/04/2001","education":"BCA","address":"address 1","mobile":"9090909090","doj":"11/07/2022"},{"name":"Aravind","department":"mechanical","designation":"teacher","dob":"30/04/2001","education":"BCA","address":"address 1","mobile":"9090909090","doj":"11/07/2022"}]

  ngOnInit(): void {
  }

}
