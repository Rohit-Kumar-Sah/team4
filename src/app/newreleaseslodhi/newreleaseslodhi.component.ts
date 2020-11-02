import { Component, OnInit } from '@angular/core';
import { WatchlistdataService } from '../watchlistdata.service';
import{Router}from '@angular/router';
import { MovieapiService } from '../movieapi.service';

@Component({
  selector: 'app-newreleaseslodhi',
  templateUrl: './newreleaseslodhi.component.html',
  styleUrls: ['./newreleaseslodhi.component.css']
})
export class NewreleaseslodhiComponent implements OnInit {

  newmovies: any=[];
  newmovies2: any=[];
  moviedata:any=[];
  
  constructor(private watchlistitems:WatchlistdataService,private router:Router,private _movieapi:MovieapiService) { }

  ngOnInit(): void {
    
    this._movieapi.getDataPopular().subscribe(data =>{
      this.moviedata=data;
     this.newmovies = this.moviedata.results.slice(10,15);
      this.newmovies2 = this.moviedata.results.slice(15,20);
   })

  /*fetch("https://api.themoviedb.org/3/movie/popular/?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1").then(response => response.json())
    .then(data =>{
       console.log(data);
       this.newmovies=data.results.slice(10,14);
       this.newmovies2=data.results.slice(15,19);
       
      });*/
    }
    mywatchlist(data:any){
      console.log("pushed data from new releases to watchlist ");
      this.watchlistitems.watchlistarray.push(data);

    }
    loadcommentpage(data:any)
    {  
      console.log(data);
      this.router.navigate(['/commentpage',data])
       
    }

}
