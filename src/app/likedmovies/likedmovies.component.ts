import { Component, OnInit } from '@angular/core';
import { WatchlistdataService } from '../watchlistdata.service';

@Component({
  selector: 'app-likedmovies',
  templateUrl: './likedmovies.component.html',
  styleUrls: ['./likedmovies.component.css']
})

export class LikedmoviesComponent implements OnInit {

  constructor(private watchlist:WatchlistdataService) { }
  watchlistdata:any=[];
  ngOnInit(): void {
    this.watchlistdata=this.watchlist.likedmovies;
    console.log(this.watchlistdata);
  }


  deletefromwatchlist(data:any){
    let index=this.watchlist.likedmovies.indexOf(data);
     if (index > -1) {
       this.watchlist.likedmovies.splice(index, 1);
     }
   }

   pintotopofwatchlist(data:any){
    let index=this.watchlist.likedmovies.indexOf(data);
    if (index > -1) {
      this.watchlist.likedmovies.splice(index, 1);
    }
    this.watchlist.likedmovies.unshift(data);
  
    let uniqueChars = [...new Set(this.watchlist.likedmovies)];
    this.watchlist.likedmovies=uniqueChars;
    this.watchlistdata=this.watchlist.likedmovies;//code to remove duplicates from watchlistdata
  }

}
