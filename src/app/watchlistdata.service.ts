import { Injectable } from '@angular/core';
import{interval} from 'rxjs';


//service which stores data about watchlist items

@Injectable({
  providedIn: 'root'
})
export class WatchlistdataService {

  constructor() { }

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
  
  
  
}
