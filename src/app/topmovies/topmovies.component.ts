import { Component, OnInit } from '@angular/core';
import { MovieapiService } from '../movieapi.service';
import { WatchlistdataService } from '../watchlistdata.service';
import{Router}from '@angular/router';

@Component({
  selector: 'app-topmovies',
  templateUrl: './topmovies.component.html',
  styleUrls: ['./topmovies.component.css']
})
export class TopmoviesComponent implements OnInit {
  public movieData:any;
  public movieTopRated:any;
  public popular:any;
  public rated:any;
  public moviePopular:any;
  constructor(private _movieapi:MovieapiService,private watchlist:WatchlistdataService,private router:Router ) { 
    this._movieapi.getDataPopular().subscribe(data =>{
      this.movieData=data;
      console.log(this.movieData);
      this.popular=this.movieData.results.sort(function(a,b){
        return b.popularity-a.popularity;
      })
      this.moviePopular=this.popular.slice(0,12)

      this.rated=this.movieData.results.sort(function(a,b){
        return b.vote_average-a.vote_average

      });
      this.movieTopRated=this.rated.slice(0,12);

      
    });
  }
 
  ngOnInit(): void {
    
    
  }

  mywatchlist(item){
    console.log(item);
    this.watchlist. watchlistarray.push(item)
  }
  loadcommentpage(id){
    this.router.navigate(['/commentpage',id]);
  }
}
