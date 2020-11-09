import { HttpClient } from '@angular/common/http';
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
     this.newmovies = this.moviedata.results.slice(10,14);
      this.newmovies2 = this.moviedata.results.slice(15,19);
      setTimeout(()=>{
      this.watchlistitems.routing=false;
      console.log('new releases done');
      },1000);
      
   })

  
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
