import { Component, OnInit } from '@angular/core';
import { WatchlistdataService } from '../watchlistdata.service';
import { Router } from '@angular/router';
import { FireBaseService } from '../firebase.service';
import { MovieapiService } from '../movieapi.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  data1:any=[];
  url : any ="https://rapidapi.p.rapidapi.com/film/";
  url1 : any;
  dataset1:any=[];
  dataset2:any;
  datapopular:any="sastraa";
  watchlistdata:any;
  forfun:any=[];
  liked:any=false;
  searchmovie:string;
  public somedata:any;

  loggedin = false;
  user = ""
  constructor(private watchlistitems:WatchlistdataService,private router:Router , private userinfo : FireBaseService ,private _movieapi:MovieapiService) { 
    this._movieapi.getDataPopular().subscribe(data =>{
       this.somedata=data;
      this.dataset1 = this.somedata.results.slice(0,6);
       this.dataset2 = this.somedata.results.slice(6,12);
    })
  }
  

  ngOnInit(): void {

    if (this.userinfo.user) {
      this.loggedin = true
      this.user = this.userinfo.username
    }
    else {
      this.loggedin = false
    }

     

  }
  
    pushdataintowatchlist(data:any)//upon clicking add to list list button corresponding movie data gets exported to services.
    {
        
            this.watchlistitems.watchlistarray.push(data);
          
    }
    
  

  loadcommentpage(data: any) {
    console.log(data);
    this.router.navigate(['/commentpage', data]);

  }

  sastra() {
    console.log("this is lakshmi");
  }

  signup() {
    console.log("sastra");
    this.router.navigate(['sign-up'])
  }
  carrers() {
    console.log("clicked on carrers page");
    this.router.navigate(['carrers'])
  }
  login() {
    this.router.navigate(['sign-in'])
  }
  newreleases() {
    this.router.navigate(['newreleases'])
  }
  searchpage(){
    console.log("we are searching for entered movie");
    console.log(this.searchmovie);
    let flag=false;
    let id;
    let name=this.searchmovie.toLowerCase();
    let array=this.somedata.results.map(function(value,index,array){
         let title= value.original_title
      if(name == title.toLowerCase()){
        flag=true;
        id=value.id;
        console.log(id);
      }

    })
    if(flag){
      this.router.navigate(['/commentpage',id]);
    }  
    else{
      alert("movie doesnt exists in our record");
    }
    console.log("hello");
  }
    
}
