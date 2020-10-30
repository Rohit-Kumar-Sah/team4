import { Injectable } from '@angular/core';

//service which stores data about watchlist items

@Injectable({
  providedIn: 'root'
})
export class WatchlistdataService {

  constructor() { }

  watchlistarray:any=[];
  suggestiondata:any="hello world";
  async userdata(){
    await fetch("https://api.themoviedb.org/3/movie/popular/?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1").then(response => response.json())
    .then(data =>{ 
        this.suggestiondata="hiii";
    });
    return this.suggestiondata;
  }
  
}
