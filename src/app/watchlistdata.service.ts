import { Injectable } from '@angular/core';


//service which stores data about watchlist items

@Injectable({
  providedIn: 'root'
})
export class WatchlistdataService {

  constructor() { }

  watchlistarray:any=[];
  suggestiondata:any="hello world";
  
  
}
