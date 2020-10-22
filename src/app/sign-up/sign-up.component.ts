import { FireBaseService } from '../firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newDetails: {name : string, email : string , password : string};
  
  constructor(private userinfo : FireBaseService,private fb : FormBuilder ){
   
  }

  signUpForm  
 
  
  
  ngOnInit(): void {
    this.signUpForm =  this.fb.group({
      name : ['',[Validators.required,Validators.pattern('^[A-Za-z_]+$'),Validators.minLength(2)]],
      email : ['',[Validators.required, Validators.email]],
      password : ['',[Validators.required,Validators.pattern('^[A-Za-z0-9]+$'),Validators.minLength(5)]]
    })   
  }

 


  //will be used in signing up user successfully
  
  SignUp(form){
    let name = this.signUpForm.controls.name.value;
    let email = this.signUpForm.controls.email.value;
    let password = this.signUpForm.controls.password.value;
    
    //sending value to firebase service
     this.userinfo.addNewUser(name,email,password)
  }

}




