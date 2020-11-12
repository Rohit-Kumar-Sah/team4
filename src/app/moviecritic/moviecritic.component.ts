import { Component, OnInit } from '@angular/core';
import { MovieapiService } from '../movieapi.service';
import { WatchlistdataService } from '../watchlistdata.service';
import { Router } from '@angular/router';
import { FireBaseService } from '../firebase.service';

@Component({
  selector: 'app-moviecritic',
  templateUrl: './moviecritic.component.html',
  styleUrls: ['./moviecritic.component.css']
})
export class MoviecriticComponent implements OnInit {
  public somedata:any;
  dataset1:any=[];
  dataset2:any;

  loggedin = false;
  user = ""
  constructor(private watchlistitems:WatchlistdataService,private router:Router , private userinfo : FireBaseService ,private _movieapi:MovieapiService) { 
    this._movieapi.getDataPopular().subscribe(data =>{
       this.somedata=data;
      this.dataset1 = this.somedata.results.slice(0,6);
       this.dataset2 = this.somedata.results.slice(6,12); //calls movieapi sevice to get movie data
       setTimeout(()=>{
        this.watchlistitems.routing=false;
        },1500); 
        
        function shuffle(array) {
          array.sort(() => Math.random() - 0.5);
        }
        
         ;
        shuffle(this.somedata.results);//called twice for better shuffling
        shuffle(this.somedata.results);
       
        this.question=this.somedata.results[0].title;
    })
  }

  ngOnInit(): void {
  }
  i:any=0;
  question:any;
  uservalue:any;
  feedback:any;
  critic(type){
    if(type == 'next'){
       if(this.i<20){
        this.question = this.somedata.results[this.i].title;
        this.uservalue=0;
        this.i++;
        this.feedback="";
       }
    }  
    if(type == 'check'){
      console.log(this.somedata.results[this.i].vote_average*10 - this.uservalue);
      let s=this.somedata.results[this.i].vote_average*10 - this.uservalue
      
      if (s==0){
        this.feedback="Is this Roger Ebert?";
      }
      else if (s>0 && s<10){
        this.feedback="WOW! Nice Job!"
      }
      else if (s>10 && s<25){
        this.feedback="Meh. I'm assuming you enjoy Adam Sandler movies."
    }
    else{
      this.feedback="Are you high?"
    }
    }
    

  }
}
