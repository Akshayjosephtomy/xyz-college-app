import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { ViewallstudentComponent } from './viewallstudent/viewallstudent.component';
import { ViewallfacultyComponent } from './viewallfaculty/viewallfaculty.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const link:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"addstudent",component:AddstudentComponent
  },
  {
    path:"viewstudents",component:ViewallstudentComponent
  },
  {
    path:"addfaculty",component:AddfacultyComponent
  },
  {
    path:"viewfaculty",component:ViewallfacultyComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AddstudentComponent,
    AddfacultyComponent,
    ViewallstudentComponent,
    ViewallfacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(link),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
