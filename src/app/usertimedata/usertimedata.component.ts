import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { WatchlistdataService } from '../watchlistdata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usertimedata',
  templateUrl: './usertimedata.component.html',
  styleUrls: ['./usertimedata.component.css']
})
export class UsertimedataComponent implements OnInit {

  constructor(private watchlist:WatchlistdataService) { }
   time:any=[];
   tkstatus=false;
   sast=interval(1000);
   dast=this.sast.subscribe(next=>{
     this.time=this.watchlist.timecontrol;
   });
   show=true;
  ngOnInit(): void {
   
  }
  remainder(){
  this.show=!this.show;
  this.tkstatus=false;
  }

  thankyou(form : NgForm){

     this.tkstatus=true;
     if(form.value.option == "true"){
           this.watchlist.remainderpage=true;
         if(form.value.time > 0) this.watchlist.duration=form.value.time; 

     }
     else{this.watchlist.remainderpage=false};
     setTimeout(()=>{
      this.remainder();
    },2500)
     
    console.log(form.value.time);
  }

}
