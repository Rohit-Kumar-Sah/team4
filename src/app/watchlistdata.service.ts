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
  sec: number = 0;
  min: number = 0;
  hrs: number = 0;
  routing: boolean = true;
  print = this.numbers.subscribe(val => {
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
      }

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

    })
  }
}
