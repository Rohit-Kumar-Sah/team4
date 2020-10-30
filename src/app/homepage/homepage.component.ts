import { Component, OnInit } from '@angular/core';
import { WatchlistdataService } from '../watchlistdata.service';
import{Router}from '@angular/router';
import { FireBaseService } from '../firebase.service';

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
  forfun:any;
  liked:any=false;

  loggedin = false;
  user = ""
  constructor(private watchlistitems:WatchlistdataService,private router:Router , private userinfo : FireBaseService ) { }

  ngOnInit(): void {

    if(this.userinfo.user){
      this.loggedin=true
      this.user= this.userinfo.username
    }
    else{
      this.loggedin=false
    }

     fetch("https://api.themoviedb.org/3/movie/popular/?api_key=2bbe64170f89b9b53d9786f59e530815&language=en-US&page=1").then(response => response.json())
    .then(data =>{
       this.datapopular = data;
       this.dataset1 = data.results.slice(0,6);
       this.dataset2 = data.results.slice(6,12);
      });

    this.forfun=this.watchlistitems.watchlistarray;
    
    
  }
  
    pushdataintowatchlist(id:number)//upon clicking add to list list button data gets exported to services.
    {
        /*let myarray = this.datapopular.results;
        let item=myarray.filter(myfunction);
        function myfunction(value,index,array)
        {
          return value.id == id;
        }
        this.watchlistitems.watchlistarray.push(item);
        this.watchlistdata=this.watchlistitems.watchlistarray;*/
        for(let i=0;i<20;i++)
        {
          if(this.datapopular.results[i].id == id )
          {
            this.watchlistitems.watchlistarray.push(this.datapopular.results[i]);
          }
        }
    }

    loadcommentpage(data:any)
    {  
      console.log(data);
      this.router.navigate(['/commentpage',data])
       
    }

    sastra(){
      console.log("this is lakshmi");
    }
    signup(){
      console.log("sastra");
      this.router.navigate(['sign-up'])
    }
    carrers(){
      console.log("clicked on carrers page");
      this.router.navigate(['carrers'])
    }
    
}
