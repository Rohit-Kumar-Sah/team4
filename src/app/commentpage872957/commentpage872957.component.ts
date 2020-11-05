import { Component, OnChanges, OnInit } from '@angular/core';
import{ActivatedRoute} from'@angular/router';
import { WatchlistdataService } from '../watchlistdata.service';
import { MovieapiService } from '../movieapi.service';
import { FireBaseService } from '../firebase.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-commentpage872957',
  templateUrl: './commentpage872957.component.html',
  styleUrls: ['./commentpage872957.component.css']
})
export class Commentpage872957Component implements OnInit, OnChanges {
  CommentsArray;

  constructor(private http : HttpClient , private route:ActivatedRoute,private watchlistservice:WatchlistdataService,private _movieapi:MovieapiService,private post : FireBaseService) {
    this._movieapi.getDataPopular().subscribe(data =>{
      this.moviedata=data;
      this.moviedata1 = this.moviedata.results;
      this.commentid = parseInt(this.route.snapshot.params['id']);
      
      for(let movie of this.moviedata1)
        {
          if(movie.id == this.commentid)
          {
            this.commentdata=movie;
            this.post.getAllCommentsOf(this.commentdata.original_title).subscribe( data=>this.CommentsArray = data );
          }
        }
        
    });

  // 

  }

  commentdata:any="sastra";
  commentid:any;
  datacomment : any;
  review1 : any=false;
  public moviedata:any=[];
  public moviedata1:any=[];

  ngOnInit(): void {

 }

 ngOnChanges(){

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

    postIt(comment,star){
    
      // console.log(this.commentdata.original_title, comment.value, star.value,this.post.user)
      this.post.addreview(this.commentdata.original_title, comment.value, star.value,this.post.user).subscribe(
        response=>
        this.post.getAllCommentsOf(this.commentdata.original_title).subscribe( data=>this.CommentsArray = data )
      )
      // 

    }

}
