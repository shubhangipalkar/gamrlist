import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import {user} from '../model/user';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  notmatch = false;
  submitted = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
Name: new FormControl(null, Validators.required),
Uid: new FormControl(null, Validators.required),
Password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
Email: new FormControl(null, [Validators.required, Validators.email]),
Cpassword: new FormControl(null, [Validators.required, Validators.minLength(8)])
    },{validators: this.pswdmatching})
  }

  onSubmit(){
    console.log("button is cliked");
    this.submitted = true;

    if (this.registerForm.valid){
      this.router.navigate(['dashbord']);
    }

  }

  pswdmatching(fg: FormGroup) : Validators{
    return fg.get('Password').value === fg.get('Cpassword').value ? null : {notmatch : true}
  }

  //Getter methods
  get Name(){
    return this.registerForm.get('Name') as FormGroup;
  }

  get Uid(){
    return this.registerForm.get('Uid') as FormGroup;
  }
  get Email(){
    return this.registerForm.get('Email') as FormGroup;
  }
  get Password(){
    return this.registerForm.get('Password') as FormGroup;
  }
  get Cpassword(){
    return this.registerForm.get('Cpassword') as FormGroup;
  }

}
