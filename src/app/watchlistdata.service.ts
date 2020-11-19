import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{interval} from 'rxjs';
import { FireBaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})

export class WatchlistdataService {
  timecontrol:any=[];
  likedmovies: any = [];
  watchlistarray: any = [];                  //liked watchlater movies data storing variables
  suggestiondata: any = "hello world";

  routing:boolean=true;  //reload page status controlling variable
  
  
  constructor(private userinfo: FireBaseService, private http: HttpClient) {
   
  }//constructor end
  
  public numbers = interval(1000);
   sec:number=0;
   min:number=0;  //timer of homepage time setting variables
   hrs:number=0;
   remaindersec:number=0;

   remainderstate:boolean=false;
   remainderpage:boolean=true;
   duration:number=120;

   print=this.numbers.subscribe(val=>{
    ++this.remaindersec;
      ++this.sec;
      if(this.sec == 60){
       this.sec=0;
      ++this.min;                                     //time changing code every one second second variable value changes
      }
    if(this.min == 60){
      this.min=0;
      ++this.hrs
    }
      if((this.remaindersec%this.duration == 0) && (this.remainderpage) ){
      this.remainderstate=true;
    }
    
  })
  

  loadliked() {
    this.http.get('https://team4-506c8.firebaseio.com/testuser/' + this.userinfo.user + '/liked.json').subscribe(result => {
      this.likedmovies = result || [];
      console.log("array earlier ", this.likedmovies, " of ", this.userinfo.user);  //calling database and fetching liked movie data on "app start"
    })
  }


  likedfunction(data, state) {

   this.http.get('https://team4-506c8.firebaseio.com/testuser/' + this.userinfo.user + '/liked.json').subscribe(result => {
       this.likedmovies = result || [];
      console.log("array earlier ", this.likedmovies); // before working on liked movies we pulldata from data base
   });

   let flag: any = false; // variable to store the staus of liked movie whether it exists already in liked movies array

   if (state) {
        this.likedmovies.map(function (value, index, arr) {
          if (value.id == data.id) { flag = true; }                //if your clicks like button these code gets activaed as state is set to true
        });                                                    
        if (flag == false) {                              
          this.likedmovies.push(data);           //if data doesnt exits in liked movie array its gets pushed to liked movie array
        }
   }
    
   else if (state == false) {                               // these block gets executed when user chooses to dislike movie 

     let a = this.likedmovies.findIndex(function (value) {
          return value.id == data.id;                        //variable a stores the index of disliked movie position in liked movie array   
     })

     if (this.likedmovies.length == a + 1) { 
        this.likedmovies.pop() 
     }
     else if (this.likedmovies.length > a) { 
        this.likedmovies.splice(a,1) 
     }
       
   }

   this.http.put('https://team4-506c8.firebaseio.com/testuser/' + this.userinfo.user + '/liked.json', this.likedmovies).subscribe(res => {
        this.likedmovies = res; console.log("array later ", res);
                                                                     //after making changesthe data of liked movies is pushed to database
    })

    console.log(this.likedmovies);

      
  }//end of liked function

  loadwatchlist() {
    this.http.get('https://team4-506c8.firebaseio.com/testuser/' + this.userinfo.user + '/watchlist.json').subscribe(result => {
      this.watchlistarray = result || [];
      console.log("array earlier ", this.watchlistarray, " of ", this.userinfo.user);  //calling database and fetching liked movie data on "app start"
    })
  }

  watchlistcontrol(data,state){ //watchlist data items control function

    this.http.get('https://team4-506c8.firebaseio.com/testuser/' + this.userinfo.user + '/watchlist.json').subscribe(result => {
       this.watchlistarray = result || [];
      console.log("array earlier ", this.likedmovies); // before working on liked movies we pulldata from data base
   });

    let flag: any = false;

     if (state) {
       this.watchlistarray.map(function (value, index, arr) {
        if (value.id == data.id) { flag = true; }               
       });                                                    
       if (flag == false) {                              
        this.watchlistarray.push(data);           
       }
     }


    else if (state == false) {                              

      let a = this.watchlistarray.findIndex(function (value) {
           return value.id == data.id;                          
      })
 
      if (this.watchlistarray.length == a + 1) { 
         this.watchlistarray.pop() 
      }
      else if (this.watchlistarray.length > a) { 
         this.watchlistarray.splice(a,1) 
      }
        
    }

    this.http.put('https://team4-506c8.firebaseio.com/testuser/' + this.userinfo.user + '/watchlist.json', this.watchlistarray).subscribe(res => {
        this.watchlistarray = res; console.log("array later ", res);
                                                                     //after making changesthe data of liked movies is pushed to database
    })


  

  }//end of watchlistcontrol function
    
}





    






