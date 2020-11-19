
import { FireBaseService } from '../firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { WatchlistdataService } from '../watchlistdata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  newDetails: { name: string, password: string };



  constructor(private userinfo: FireBaseService, private fb: FormBuilder, private router : Router,private watchlist:WatchlistdataService, private http: HttpClient) {

  }

 
  success=false //determines whether signin was sussessfull or not
  

  signinForm
invalid=false
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z_]+$'), Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]+$'), Validators.minLength(5)]]
    })
    this.watchlist.routing=false;
  }

  signin(formdata) {
    this.success=true
    this.userinfo.signinUser(formdata.controls.name.value, formdata.controls.password.value).subscribe(data =>{
       this.success= data; 
       if(this.success)
      {  
        this.watchlist.loadliked();//we are calling backend once the credentials are true to load liked movie and watchlist dataof particular user;
        this.watchlist.loadwatchlist();
        this.router.navigate(['/'])
        this.date.date=new Date().getDate();
        this.date.month=new Date().getMonth();
        this.date.year= new Date().getFullYear();
        this.date.day=this.dayname[new Date().getDay()];
        this.date.hrs=new Date().getHours();
        this.date.mins=new Date().getMinutes();
        this.date.secs=new Date().getSeconds();
    
        

        this.http.get('https://team4-506c8.firebaseio.com/testuser/' + this.userinfo.user + '/logintime.json').subscribe(result => {
         this.timedata = result || [];
        console.log("fromget",this.timedata);
        this.timedata.push(this.date);
          if(this.timedata.length>5){
          this.timedata.splice(0,this.timedata.length-5);
          }  
          
          this.watchlist.timecontrol=this.timedata.reverse().slice();
          this.timedata.reverse();
        
        
        this.http.put('https://team4-506c8.firebaseio.com/testuser/' + this.userinfo.user + '/logintime.json',this.timedata).subscribe(res => {
        this.date = res; console.log("array later ",res);                                        
         })

        })//completely related to posting data of user time in database


       }
      else{
        this.invalid=true
      }
      })
  }

 date:any={date:"",month:"",year:"",day:"",hrs:"",mins:"",secs:""};
 dayname:any=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
 timedata:any=[];


}

