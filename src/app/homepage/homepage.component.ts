import { Component, OnInit } from '@angular/core';
import { WatchlistdataService } from '../watchlistdata.service';
import { Router } from '@angular/router';
import { FireBaseService } from '../firebase.service';
import { MovieapiService } from '../movieapi.service';
import{interval} from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  timerstatus:any=true;
  dataset1:any=[];
  dataset2:any;
  datapopular:any="sastraa";
  watchlistdata:any;
  forfun:any=[];
  searchmovie:string;
  public somedata:any;

  public sec:number=0;
  public min:number=0;
  public hrs:number=0;

 public numbers = interval(1000);
  public print=this.numbers.subscribe(val=>{
   
    this.sec=this.watchlistitems.sec;
    this.min=this.watchlistitems.min;    //call service every one second to get the data of time;
    this.hrs=this.watchlistitems.hrs;
  })

  

  loggedin = false;
  user = ""
  constructor(private watchlistitems:WatchlistdataService,private router:Router , private userinfo : FireBaseService ,private _movieapi:MovieapiService) { 
    this._movieapi.getDataPopular().subscribe(data =>{
       this.somedata=data;
      this.dataset1 = this.somedata.results.slice(0,6);
       this.dataset2 = this.somedata.results.slice(6,12); //calls movieapi sevice to get movie data
       setTimeout(()=>{
        this.watchlistitems.routing=false;
        },1500); 
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
  }//end of ngoninit

  pushdataintowatchlist(data:any){//upon clicking add to list list button corresponding movie data gets exported to services.
  
    this.watchlistitems.watchlistarray.push(data);
  }
    
  loadcommentpage(data: any) {//loads comment page of particular movie
    console.log(data);
    this.router.navigate(['/commentpage', data]);
  }

  searchpage(){//user enters movie name the page directs to comment pageof corresponding movie
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
      this.watchlistitems.routing=true;
      this.router.navigate(['/commentpage',id]);
    }  
    else{
      alert("movie doesnt exists in our record");
    }
  }


  timerhide(){//user clicks on croos buttton on timer to hide timer
    
    this.timerstatus=!this.timerstatus;
    
  }
    reloadpage(){
      this.watchlistitems.routing=true;
    }
}
