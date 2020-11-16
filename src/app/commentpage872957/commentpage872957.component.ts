import { Component, OnChanges, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from'@angular/router';
import { WatchlistdataService } from '../watchlistdata.service';
import { MovieapiService } from '../movieapi.service';
import { FireBaseService } from '../firebase.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-commentpage872957',
  templateUrl: './commentpage872957.component.html',
  styleUrls: ['./commentpage872957.component.css']
})
export class Commentpage872957Component implements OnInit, OnChanges {
  CommentsArray;

  constructor( private fb : FormBuilder   ,private http : HttpClient , private route:ActivatedRoute,private watchlistservice:WatchlistdataService
    ,private _movieapi:MovieapiService,private post : FireBaseService , private userinfo : FireBaseService, private router : Router)   {
    this._movieapi.getDataPopular().subscribe(data =>{

      setTimeout(()=>{
        this.watchlistservice.routing=false;
        },2000); 

      this.moviedata=data;
      this.moviedata1 = this.moviedata.results;
      this.commentid = parseInt(this.route.snapshot.params['id']);
      
      for(let movie of this.moviedata1){
          if(movie.id == this.commentid)
          {
            this.commentdata=movie;
            // this.post.getAllCommentsOf(this.commentdata.original_title).subscribe( data=> {this.CommentsArray = data
            //   console.log("allcomments",data)} );

            this.http.get('https://team4-506c8.firebaseio.com/allreviews/'+this.commentdata.original_title+'.json')
            .subscribe(data=>{this.CommentsArray = data; console.log("allcomments",data ," name ",Object.keys(data)) ;
            console.log('https://team4-506c8.firebaseio.com/allreviews/'+this.commentdata.original_title+'.json')
          })

          }
       }
       let d=this.commentdata;
       let m=false;
       this.watchlistservice.likedmovies.map(function(value,index,arr){
         if(d.id == value.id){m = true;}
      })
        this.likedmovies=m;
    });

  // 

  }
me = this.post.user;
  public commentdata:any="sastra";
  commentid:any;
  datacomment : any;
  review1 : any=false;
  public moviedata:any=[];
  public moviedata1:any=[];
  rate:any=1;
  likedmovies:any;


 comment_review = this.fb.group({
    myreview : this.fb.control("",Validators.required),
    stars : this.fb.control("",[Validators.required,Validators.pattern('^([0-9]|10)$')])
})


  ngOnInit(): void {
      
      
      
 }

 ngOnChanges(){

 }
  
 delete (key){
  this.http.delete('https://team4-506c8.firebaseio.com/testuser/'+this.userinfo.user+'/activities/'+key+'.json').subscribe(data=>
  {
  })

  //delete from all comment
  this.http.delete('https://team4-506c8.firebaseio.com/allreviews/'+key+'/'+this.userinfo.user+'/.json').subscribe(data=>
  {

    this.http.get('https://team4-506c8.firebaseio.com/allreviews/'+this.commentdata.original_title+'.json')
  .subscribe(data=>{this.CommentsArray = data; 
})

   })
  
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

    postIt(){
    
      // as soon as comments is posted , a fetch is called for adding the newly made comment available in comments section
      this.post.addreview(this.commentdata.original_title, this.comment_review.controls.myreview.value, this.comment_review.controls.stars.value,this.post.user).subscribe(
        response=>
        this.post.getAllCommentsOf(this.commentdata.original_title).subscribe( data=>this.CommentsArray = data )
      )
      // 

    }

    // postIt(comment,star){
    
    //   // as soon as comments is posted , a fetch is called for adding the newly made comment available in comments section
    //   this.post.addreview(this.commentdata.original_title, comment.value, star.value,this.post.user).subscribe(
    //     response=>
    //     this.post.getAllCommentsOf(this.commentdata.original_title).subscribe( data=>this.CommentsArray = data )
    //   )
    //   // 

    // }

    likedmovie(data,liked){
      this.watchlistservice.likedfunction(data,liked);
      this.likedmovies=!this.likedmovies;
      console.log(liked);
      console.log(this.watchlistservice.likedmovies);
    }

    grabOtherUser(username,user)
    {
      if(user != this.userinfo.username){
      this.userinfo.theotheruser = user  
      this.userinfo.theotherusername= username
      this.router.navigate([`/otheruser/${user}`])
  
      }
      else
      {
        this.router.navigate([`/mywall`])
      }
    
    
    }
  

}
