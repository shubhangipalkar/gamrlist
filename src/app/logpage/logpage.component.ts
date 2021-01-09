import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { from } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-log-page',
  templateUrl: './logpage.component.html',
  styleUrls: ['./logpage.component.css']
})
export class LogPageComponent implements OnInit {
  loginform : FormGroup;
   submitted = false;

  constructor(private router: Router, private actRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  //Getter methods

  get email(){
    return this.loginform.get('email') as FormGroup;
  }

  get password(){
    return this.loginform.get('password') as FormGroup;
  }

  onSubmit(){
    console.log('This has been submited');
    this.submitted = true;

    if (this.loginform.valid){
      this.router.navigate (['dashbord']);
    }

  }
}
