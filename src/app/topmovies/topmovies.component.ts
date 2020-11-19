import { FireBaseService } from './../firebase.service';
import { Component, OnInit } from '@angular/core';
import { MovieapiService } from '../movieapi.service';
import { WatchlistdataService } from '../watchlistdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topmovies',
  templateUrl: './topmovies.component.html',
  styleUrls: ['./topmovies.component.css'],
})
export class TopmoviesComponent implements OnInit {
  public movieData: any;
  public movieTopRated: any;
  public popular: any;
  public rated: any;
  public isLoggedin: boolean;
  public moviePopular: any;
  public Switch: boolean=true;
  constructor(
    private _movieapi: MovieapiService,
    private watchlist: WatchlistdataService,
    private router: Router,
    private firebaseservice: FireBaseService
  ) {
    this._movieapi.getDataPopular().subscribe((data) => {
      this.movieData = data;
      // console.log(this.movieData);
      this.popular = this.movieData.results.sort(function (a, b) {
        return b.popularity - a.popularity;
      });
      this.moviePopular = this.popular.slice(0, 12);

      this.rated = this.movieData.results.sort(function (a, b) {
        return b.vote_average - a.vote_average;
      });
      this.movieTopRated = this.rated.slice(0, 12);

      setTimeout(() => {
        this.watchlist.routing = false;
        this.preservelike();
        this.preservewatchlist();
      }, 1000);
    });
  }

  ngOnInit(): void {}

  loadcommentpage(id) {
    this.router.navigate(['/commentpage', id]);
  }

  likedmovie(data, liked) {
    this.watchlist.likedfunction(data, liked);
  }

  preservelike() {
    //if(this.dataset1.length >0 && this.watchlistitems.likedmovies.length > 0){

    this.moviePopular.map((value) => {
      this.watchlist.likedmovies.map((values) => {
        if (value.id == values.id) {
          this.moviePopular[this.moviePopular.indexOf(value)].video = true; //if liked movie in liked service and pulled movie matches it gets liked
        }
      });
    });

    this.movieTopRated.map((value) => {
      this.watchlist.likedmovies.map((values) => {
        if (value.id == values.id) {
          this.movieTopRated[this.movieTopRated.indexOf(value)].video = true; //if liked movie in liked service and pulled movie matches it gets liked
        }
      });
    });
  }

  preservewatchlist() {
    this.moviePopular.map((value) => {
      this.watchlist.watchlistarray.map((values) => {
        if (value.id == values.id) {
          this.moviePopular[this.moviePopular.indexOf(value)].adult = true; //if liked movie in liked service and pulled movie matches it gets liked
        }
      });
    });

    this.movieTopRated.map((value) => {
      this.watchlist.watchlistarray.map((values) => {
        if (value.id == values.id) {
          this.movieTopRated[this.movieTopRated.indexOf(value)].adult = true; //if liked movie in liked service and pulled movie matches it gets liked
        }
      });
    });
  }

  pushdataintowatchlist(item, state) {
    this.isLoggedin = this.firebaseservice.isLoggedin();
    if (this.isLoggedin) {
      this.watchlist.watchlistcontrol(item, state);
    } else {
      item.adult = false;
      alert('Kindly signin/Login first');
    }
  }
  switchPtoT() {
    this.Switch = true;
  }
  switchTtoP() {
    this.Switch = false;
  }
}
