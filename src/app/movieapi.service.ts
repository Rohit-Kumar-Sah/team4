import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {

  private _urlTopPopular: string = "https://api.themoviedb.org/3/movie/popular?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1";
  //private _urlTopRated: string = "https://api.themoviedb.org/3/movie/top_rated?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1";
  //private _urlDetails:string="https://api.themoviedb.org/3/movie/724989?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US";

  constructor(private http: HttpClient) { }





  getDataPopular() {
    return this.http.get(this._urlTopPopular);
  }
  // getDataTopRated(){
  //   return this.http.get(this._urlTopRated);
  // }

getDataByID(id){
  return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US`);
}

}

