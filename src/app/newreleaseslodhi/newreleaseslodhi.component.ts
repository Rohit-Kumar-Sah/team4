import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newreleaseslodhi',
  templateUrl: './newreleaseslodhi.component.html',
  styleUrls: ['./newreleaseslodhi.component.css']
})
export class NewreleaseslodhiComponent implements OnInit {

  newmovies: any=[];
  newmovies2: any=[]
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.http.get('https://api.themoviedb.org/3/movie/popular/?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1').subscribe(
      data => {
        console.log(data['results'])
        this.newmovies=data['results'].slice(0,4);
       this.newmovies2=data['results'].slice(4,8);
      })

  // fetch("https://api.themoviedb.org/3/movie/popular/?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1").then(response => response.json())
  //   .then(data =>{
  //      console.log(data);
  //      this.newmovies=data.results.slice(0,4);
  //      this.newmovies2=data.results.slice(4,8);
       
  //     });
    }
    mywatchlist(){
      console.log("add to watchlist");
    }

}
