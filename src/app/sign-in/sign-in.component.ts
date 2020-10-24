import { FireBaseService } from '../firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  newDetails: { name: string, password: string };

  constructor(private userinfo: FireBaseService, private fb: FormBuilder) {

  }

 
  
  ngOnInit(): void {
    
  }

 




}




