import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FireBaseService } from '../firebase.service';
import { WatchlistdataService } from '../watchlistdata.service';

@Component({
  selector: 'app-my-wall',
  templateUrl: './my-wall.component.html',
  styleUrls: ['./my-wall.component.css']
})
export class MyWallComponent implements OnInit {
 
  moviesnames
  Name: string
  activities
  updating = false
  username = this.userinfo.username
  allmovienames = ["sholay", "lion king", "sholayien"]
  movies //stores the saved movies
allusername
watchlistdata:any;
  fullusername: any[];
  alllikes
  likedlistdata: any;
  mybio 
  totalmoviereviewed

  constructor(private watchlistitems:WatchlistdataService,private watchlist : WatchlistdataService ,private userinfo: FireBaseService, private fb: FormBuilder, private http : HttpClient,private router : Router) { }
  
  review = this.fb.group({
    movieName: this.fb.control('', Validators.required),
    movieReview: this.fb.control('' , Validators.required),
    stars: this.fb.control('',[Validators.required,Validators.pattern('^([0-9]|10)$')])
    // http://api.themoviedb.org/3/movie/popular?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1
    // https://api.themoviedb.org/3/movie/popular?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1

  }
  )

  

  ngOnInit(): void {

    this.userinfo.totalreview( this.userinfo.user ).subscribe(data=>{this.totalmoviereviewed=Object.keys(data).length; console.log(this.totalmoviereviewed)})

    this.loadBio()

    this.userinfo.grabAllUser().subscribe(data=>{this.allusername=data[0]; this.fullusername=data[1]; console.log(data[0],data[1])})


    this.movies=this.watchlist.watchlistarray

    this.Name = this.userinfo.user
    this.userinfo.myreviews().subscribe(data => this.activities = data) // loads all review 

    // load all movie names in an array allmovienames
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1')
    .subscribe(data=> {this.moviesnames=data})



    let uniqueChars = [...new Set(this.watchlistitems.watchlistarray)];
    this.watchlistitems.watchlistarray=uniqueChars;
    this.watchlistdata=this.watchlistitems.watchlistarray;//code to remove duplicates from watchlistdata
    this.likedlistdata=this.watchlistitems.likedmovies;//code to remove duplicates from watchlistdata



    setTimeout(()=>{
      this.watchlistitems.routing=false;
      },1500); 


      // this.saveLikedMovies()
  
  
      this.loadnotifications()

  }
notifications

  loadnotifications(){
    this.http.get('https://team4-506c8.firebaseio.com/testuser/'+ this.userinfo.user +'/notifications.json').subscribe(data=>{
this.notifications=data;
this.notifications.shift()
this.notifications=this.notifications.reverse()
console.log("notificains",this.notifications)
    })
  }


  saveLikedMovies()
  {

    this.http.put('https://team4-506c8.firebaseio.com/testuser/'+ this.userinfo.user +'/liked.json', this.likedlistdata ).subscribe()

  }

  
  likedmovie(data,liked){
      
    this.watchlistitems.likedfunction(data,liked);
    this.likedlistdata=this.watchlistitems.likedmovies;//code to remove duplicates from watchlistdata

   



  }
  
  
  submitReview() {

    // console.log("the credit of user", this.userinfo.user)

    this.userinfo.addreview(this.review.controls.movieName.value, this.review.controls.movieReview.value, this.review.controls.stars.value).subscribe(data=>{ this.refresh()
      this.userinfo.totalreview( this.userinfo.user ).subscribe(data=>{this.totalmoviereviewed=Object.keys(data).length;  this.review.reset(); console.log(this.totalmoviereviewed)})
    
    })



    // console.log(this.review.controls.movieName.value)
    // console.log("activities", this.review)
  }
  refresh() {
    this.updating = true
    this.userinfo.myreviews().subscribe(data => { this.activities = data, this.updating = false })


  
  }
  res
  //deletecomment
 delete (key, username,review,movie){
  this.http.delete('https://team4-506c8.firebaseio.com/testuser/'+this.userinfo.user+'/activities/'+key+'.json').subscribe(data=>
  { this.userinfo.myreviews().subscribe(data => this.activities = data
    
    )})

  //delete from all comment
  this.http.delete('https://team4-506c8.firebaseio.com/allreviews/'+movie+'/'+this.userinfo.user+'/.json').subscribe(data=>
  {
    this.userinfo.totalreview( this.userinfo.user ).subscribe(data=>{this.totalmoviereviewed=Object.keys(data).length; console.log(this.totalmoviereviewed)})
   })
  
 }

like(key,username){
  let obje;
  this.http.get('https://team4-506c8.firebaseio.com/testuser/'+this.userinfo.user+'/activities/'+key+'.json')
  .subscribe(data=>{ obje= data;  obje.likes.push(this.userinfo.user) ; console.log(obje) ; obje.totalLikes+=1; this.alllikes = obje.likes.length  ; 

  this.http.put('https://team4-506c8.firebaseio.com/testuser/'+this.userinfo.user+'/activities/'+key+'.json',obje).subscribe(data=>{obje= data;  console.log("latest obje",obje);  this.refresh()})
 
})
  }


dislike(key,username){
  let obje;
  this.http.get('https://team4-506c8.firebaseio.com/testuser/'+this.userinfo.user+'/activities/'+key+'.json')
  .subscribe(data=>{ obje= data;  obje.likes.splice(obje.likes.indexOf(this.userinfo.user),1) ; console.log(obje) ; 
      obje.totalLikes-=1;  this.alllikes = obje.likes.length;

  this.http.put('https://team4-506c8.firebaseio.com/testuser/'+this.userinfo.user+'/activities/'+key+'.json',obje)
  .subscribe(data=>{obje= data;  console.log("latest obje",obje);  this.refresh()})
 
})
}

  comment(key,username){
    // take username amd key to shoe comment and all other comments
this.router.navigate(['/comments'])

// save the comment info and user info 
this.userinfo.commentdata(username,this.userinfo.user, key)

  }

  grabOtherUser(user)
  {
    if(this.fullusername[this.allusername.indexOf(user.value)]){
      this.userinfo.theotheruser = user.value  
    this.userinfo.theotherusername= this.fullusername[this.allusername.indexOf(user.value)]
    this.router.navigate([`/otheruser/${user.value}`])

    }
    else
    console.log("invalid username entered")
  
  }


  deletefromwatchlist(data:any){
    let index=this.watchlistitems.watchlistarray.indexOf(data);
     if (index > -1) {
       this.watchlistitems.watchlistarray.splice(index, 1);
     }
   }
 
   pintotopofwatchlist(data:any){
     let index=this.watchlistitems.watchlistarray.indexOf(data);
     if (index > -1) {
       this.watchlistitems.watchlistarray.splice(index, 1);
     }
     this.watchlistitems.watchlistarray.unshift(data);
   
     let uniqueChars = [...new Set(this.watchlistitems.watchlistarray)];
     this.watchlistitems.watchlistarray=uniqueChars;
     this.watchlistdata=this.watchlistitems.watchlistarray;//code to remove duplicates from watchlistdata
   }


   editBio(bio){


  this.http.put('https://team4-506c8.firebaseio.com/testuser/'+ this.userinfo.user +'/info.json',{bio:bio.value}).subscribe(data=>this.loadBio())
  }

   loadBio()
   {
  this.http.get('https://team4-506c8.firebaseio.com/testuser/'+ this.userinfo.user +'/info.json').subscribe(data=>{
 console.log("info ", data['bio'])    
  this.mybio = data['bio']

} )

   }

}
