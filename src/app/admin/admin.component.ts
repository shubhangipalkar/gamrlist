import { Component, OnInit } from '@angular/core';
import { async, from, Observable } from 'rxjs';
import {APIcallService} from '../Service/apicall.service';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import {adlog} from '../model/admin';
import { error } from 'console';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminloginform: FormGroup;
  name= " ";
  loginError: boolean = false;
  submitted: boolean = false;
  adval : adlog = {
    admin: "email",
    password: "password"
  };
  constructor(private service: APIcallService, private router: Router) {

   }

  ngOnInit(): void {
   this.adminloginform = new FormGroup ({
     email: new FormControl(null,[Validators.required,Validators.email]),
     password: new FormControl(null,[Validators.required,Validators.minLength(4)])
   })
  }

  //getter metods
  get email(){
    return this.adminloginform.get('email') as FormGroup;
  }

  get password(){
    return this.adminloginform.get('password') as FormControl;
  }

  // getadmin(){
  //   this.service.getData().subscribe(data => {
  //     console.log (data);
  //      this.datachk = data;
  //   })
  // }


//   onSubmit(email,password){
//     console.log ('success');
//     this.submitted = true;
// this.service.authenticateUser(email, password).subscribe((data: any) => {
// this.router.navigate['/default']
// },
// (error : HttpErrorResponse) => {
// this.loginError = true;
// }
// // )

//   }



  // async onSubmit(E1:any,P1:any){

  //   console.log ('submit clicked' + new Date().toString());
  //   const ad = {
  //     "email": E1,
  //     "password": P1
  //   }

        // const response = this.service.getData(ad);
        // console.log(response)
        // console.log ('before response ' + new Date().toString());
        // if (response){
        //   console.log('password is valid');
        //   console.log ('in response' + new Date().toString());
        //   this.router.navigate['eventlist']

        // }else{
        // this.loginError = true;
        // console.log ('else block' + new Date().toString());
        // console.log('Invalid userid or password');
        // }

//  getMethod() {
//    return this.service.getNormal().subscribe(data => {
//      console.log (data);
//      this.adval = data;

//    })
//  }

getMethod() {
  return this.service.getNormal(this.adval).subscribe(
    (data: adlog) => {
      console.log(data);
      this.router.navigate (['dashbord/admin/eventlist']);
    },
    (error: any) => console.log(error)
  )
  };
}

















