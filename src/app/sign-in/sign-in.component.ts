
import { FireBaseService } from '../firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  newDetails: {name : string, password : string};
  
  constructor(private userinfo : FireBaseService,private fb : FormBuilder ){
   
  }

  signinForm  
 
  
  
  ngOnInit(): void {
    this.signinForm =  this.fb.group({
      name : ['',[Validators.required,Validators.pattern('^[A-Za-z_]+$'),Validators.minLength(2)]],
      email : ['',[Validators.required, Validators.email]],
      password : ['',[Validators.required,Validators.pattern('^[A-Za-z0-9]+$'),Validators.minLength(5)]]
    })   
  }
}
