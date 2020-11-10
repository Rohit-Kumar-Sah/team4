import { Injectable } from '@angular/core';
import{interval} from 'rxjs';


//service which stores data about watchlist items

@Injectable({
  providedIn: 'root'
})
export class WatchlistdataService {

  constructor() { }
  likedmovies:any=[];
  watchlistarray:any=[];
  suggestiondata:any="hello world";
  public numbers = interval(1000);
   sec:number=0;
   min:number=0;
   hrs:number=0;
   routing:boolean=true;
      print=this.numbers.subscribe(val=>{
    ++this.sec;
    if(this.sec == 60){
      this.sec=0;
      ++this.min;
    }
    if(this.min == 60){
      this.min=0;
      ++this.hrs
    }
    
  })
  likedfunction(data,state){
    let flag:any=false;
    if(state){
      this.likedmovies.map(function(value,index,arr){
        if(value.id == data.id){flag=true;}
      })
      if(flag == false){
        this.likedmovies.push(data);
      }
    }

    else if(state == false){
    
      let a=this.likedmovies.findIndex(function(value){
        return value.id == data.id;
      })
      if(this.likedmovies.length == a+1){this.likedmovies.pop()}
      else if(this.likedmovies.length >a){this.likedmovies.slice(a,a+1)}
      console.log(this.likedmovies);
    }
    console.log("array length",this.likedmovies.length);
  }

  
  
  
  
}
