import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from'@angular/router';
import { WatchlistdataService } from '../watchlistdata.service';

@Component({
  selector: 'app-commentpage872957',
  templateUrl: './commentpage872957.component.html',
  styleUrls: ['./commentpage872957.component.css']
})
export class Commentpage872957Component implements OnInit {

  constructor(private route:ActivatedRoute,private watchlistservice:WatchlistdataService) { }
  commentdata:any="sastra";
  commentid:any;
  datacomment : any;
  review1 : any=false;
  ngOnInit(): void {
    
    this.commentid = parseInt(this.route.snapshot.params['id']);

      fetch("https://api.themoviedb.org/3/movie/popular/?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1").then(response => response.json())
      .then(data =>{
        
        for(let i=0;i<data.results.length;i++)
        {
          if(data.results[i].id == this.commentid)
          {
             this.commentdata=data.results[i];
          }
        }
      });
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
