import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from'@angular/router';
import { WatchlistdataService } from '../watchlistdata.service';
import { MovieapiService } from '../movieapi.service';

@Component({
  selector: 'app-commentpage872957',
  templateUrl: './commentpage872957.component.html',
  styleUrls: ['./commentpage872957.component.css']
})
export class Commentpage872957Component implements OnInit {

  constructor(private route:ActivatedRoute,private watchlistservice:WatchlistdataService,private _movieapi:MovieapiService) {
    this._movieapi.getDataPopular().subscribe(data =>{
      this.moviedata=data;
      this.moviedata1 = this.moviedata.results;
      this.commentid = parseInt(this.route.snapshot.params['id']);
      for(let movie of this.moviedata1)
        {
          if(movie.id == this.commentid)
          {
            this.commentdata=movie;
          }
        }
        
    });
  }//end of constructor

  commentdata:any="sastra";
  commentid:any;
  datacomment : any;
  review1 : any=false;
  public moviedata:any=[];
  public moviedata1:any=[];

  ngOnInit(): void {
 }
  
  review()
    {
      console.log("clicked on review");
      this.review1 = !this.review1;
    }

    addtowatchlist(data:any){
         console.log("pushing data into watchlist from commentpage");
         this.watchlistservice.watchlistarray.push(data);
    }

}
