import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDetails  } from '../interfaces/users'
import { AuthservicesService } from '../services/authservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registrationForm!: FormGroup
  

  constructor(private authservice: AuthservicesService, private formBuilder:FormBuilder,private router: Router){

    this.registrationForm=this.formBuilder.group({
      fullName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password:['',[Validators.required]],
    })

  }

  createUser(){
    console.log(this.registrationForm.value);

    let registeredUser:UserDetails =this.registrationForm.value
    this.authservice.createUser(registeredUser)
    this.router.navigate(['login'])

    
  }

}
