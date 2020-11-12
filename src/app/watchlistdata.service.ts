import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { FireBaseService } from './firebase.service';


//service which stores data about watchlist items

@Injectable({
  providedIn: 'root'
})
export class WatchlistdataService {

  constructor(private userinfo: FireBaseService, private http: HttpClient) {


  }
  likedmovies: any = [];
  watchlistarray: any = [];
  suggestiondata: any = "hello world";
  public numbers = interval(1000);
<<<<<<< HEAD
   sec:number=0;
   min:number=0;
   hrs:number=0;
   a:number;
   routing:boolean=true;
      print=this.numbers.subscribe(val=>{
=======
  sec: number = 0;
  min: number = 0;
  hrs: number = 0;
  routing: boolean = true;
  print = this.numbers.subscribe(val => {
>>>>>>> 8cd2255fc7e8a8d15c6bb980ad3fe06a4997da07
    ++this.sec;
    if (this.sec == 60) {
      this.sec = 0;
      ++this.min;
    }
    if (this.min == 60) {
      this.min = 0;
      ++this.hrs
    }

  })
<<<<<<< HEAD
  likedfunction(data,state){

    let flag:any=false;
    if(state){
      this.likedmovies.map((value,index,arr)=>{
        if(value.id == data.id){flag=true;}
      })
      if(flag == false){
        this.likedmovies.push(data);
=======

  loadliked() {
    this.http.get('https://team4-506c8.firebaseio.com/testuser/' + this.userinfo.user + '/liked.json').subscribe(result => {
      this.likedmovies = result || [];
      console.log("array earlier ", this.likedmovies, " of ", this.userinfo.user);
    })
  }


  likedfunction(data, state) {

    this.http.get('https://team4-506c8.firebaseio.com/testuser/' + this.userinfo.user + '/liked.json').subscribe(result => {

      this.likedmovies = result || [];
      console.log("array earlier ", this.likedmovies);





      let flag: any = false;
      if (state) {
        this.likedmovies.map(function (value, index, arr) {
          if (value.id == data.id) { flag = true; }
        })
        if (flag == false) {
          this.likedmovies.push(data);
        }
>>>>>>> 8cd2255fc7e8a8d15c6bb980ad3fe06a4997da07
      }

<<<<<<< HEAD
    else if(state == false){
    
      this.a=this.likedmovies.findIndex((value)=>{
        return value.id == data.id;
      })

      if(this.likedmovies.length == this.a+1){this.likedmovies.pop();} 

      else if(this.likedmovies.length >this.a){this.likedmovies.splice(this.a,1)}
     
       
      
    }
    
  }
=======
      else if (state == false) {

        let a = this.likedmovies.findIndex(function (value) {
          return value.id == data.id;
        })
        if (this.likedmovies.length == a + 1) { this.likedmovies.pop() }
        else if (this.likedmovies.length > a) { this.likedmovies.slice(a, a + 1) }
        console.log(this.likedmovies);
      }

      this.http.put('https://team4-506c8.firebaseio.com/testuser/' + this.userinfo.user + '/liked.json', this.likedmovies).subscribe(res => {
        this.likedmovies = res; console.log("array later ", res);

      })
>>>>>>> 8cd2255fc7e8a8d15c6bb980ad3fe06a4997da07

    })
  }
}
