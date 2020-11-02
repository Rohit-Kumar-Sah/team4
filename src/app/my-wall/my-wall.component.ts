import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
 

  constructor(private watchlist : WatchlistdataService ,private userinfo: FireBaseService, private fb: FormBuilder, private http : HttpClient,private router : Router) { }

  review = this.fb.group({
    movieName: this.fb.control(''),
    movieReview: this.fb.control(''),
    stars: this.fb.control('')
    // http://api.themoviedb.org/3/movie/popular?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1
    // https://api.themoviedb.org/3/movie/popular?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1

  }
  )

  ngOnInit(): void {

    this.userinfo.grabAllUser().subscribe(data=>{this.allusername=data; console.log(data)})


    this.movies=this.watchlist.watchlistarray

    this.Name = this.userinfo.user
    this.userinfo.myreviews().subscribe(data => this.activities = data) // loads all review 

    // load all movie names in an array allmovienames
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1')
    .subscribe(data=> {this.moviesnames=data})

    // forkJoin([
    // this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1')
    // .pipe(tap(res=>{console.log(res); return "joj" })),
    // this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=2')
    // .pipe(tap(res=>console.log(res)))
  // ])
  //   .subscribe(data=> {this.moviesnames=data; console.log("final",data)})

  }

  
  submitReview() {

    // console.log("the credit of user", this.userinfo.user)

    this.userinfo.addreview(this.review.controls.movieName.value, this.review.controls.movieReview.value, this.review.controls.stars.value)



    // console.log(this.review.controls.movieName.value)
    // console.log("activities", this.review)
  }
  refresh() {
    this.updating = true
    this.userinfo.myreviews().subscribe(data => { this.activities = data, this.updating = false })


  
  }

  comment(key){
    // take username amd key to shoe comment and all other comments
this.router.navigate(['/comments'])

// save the comment info and user info 
this.userinfo.commentdata(this.userinfo.username,this.userinfo.user, key)

  }

  grabAllUser(usr)
  {
    console.log(usr.value)
  }

}
