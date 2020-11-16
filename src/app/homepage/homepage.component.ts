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
  likedmoviearray:any="hii";
  public somedata:any;
  loggedin = false;
  user = ""

  public sec:number=0;
  public min:number=0; //timer variables
  public hrs:number=0;

 public numbers = interval(1000);
  public print=this.numbers.subscribe(val=>{
    this.sec=this.watchlistitems.sec;
    this.min=this.watchlistitems.min;    //calling time service every one second to get the data of time;
    this.hrs=this.watchlistitems.hrs;
  })

  constructor(private watchlistitems:WatchlistdataService,private router:Router , private userinfo : FireBaseService ,private _movieapi:MovieapiService) { 
    this._movieapi.getDataPopular().subscribe(data =>{
       this.somedata=data;
      this.dataset1 = this.somedata.results.slice(0,6);
       this.dataset2 = this.somedata.results.slice(6,12); //calls movieapi sevice to get movie data

       setTimeout(()=>{
        this.watchlistitems.routing=false; //shutdowns reloading page 
        },1500); 

        function shuffle(array) {
          array.sort(() => Math.random() - 0.5);  //shuffling array for questions of movie critics
        }
        
         ;
        shuffle(this.somedata.results);//called twice for better shuffling
        shuffle(this.somedata.results);
       
        this.question=this.somedata.results[0].title;
        
        setTimeout(() => {
          this.preservelike(); //2s time delay is provided as data from backend related to liked movies is taking some time to load
          this.preservewatchlist();
        },2000);
        

    })
  }//end of constructor
  
  preservelike(){
    //if(this.dataset1.length >0 && this.watchlistitems.likedmovies.length > 0){

      this.dataset1.map((value)=>{
         this.watchlistitems.likedmovies.map((values)=>{
            if(value.id == values.id){
              this.dataset1[(this.dataset1.indexOf(value))].video = true;//if liked movie in liked service and pulled movie matches it gets liked
              
            }
        })
      })

      this.dataset2.map((value)=>{
        this.watchlistitems.likedmovies.map((values)=>{
           if(value.id == values.id){
             this.dataset2[(this.dataset2.indexOf(value))].video = true;//if liked movie in liked service and pulled movie matches it gets liked
             
           }
       })
     })

  } 

  preservewatchlist(){
     //if(this.dataset1.length >0 && this.watchlistitems.likedmovies.length > 0){

      this.dataset1.map((value)=>{
        this.watchlistitems.watchlistarray.map((values)=>{
           if(value.id == values.id){
             this.dataset1[(this.dataset1.indexOf(value))].adult = true;//if liked movie in liked service and pulled movie matches it gets liked
             
           }
       })
     })

     this.dataset2.map((value)=>{
       this.watchlistitems.watchlistarray.map((values)=>{
          if(value.id == values.id){
            this.dataset2[(this.dataset2.indexOf(value))].adult = true;//if liked movie in liked service and pulled movie matches it gets liked
            
          }
      })
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

    this.likedmoviearray=this.watchlistitems.likedmovies; 
  }//end of ngoninit


  pushdataintowatchlist(data:any,state:any){
    console.log(state);
    this.watchlistitems.watchlistcontrol(data,state);
    //this.watchlistitems.watchlistarray.push(data); //upon clicking add to watch list button corresponding movie data gets exported to services.
  }
    
  loadcommentpage(data: any) {
    console.log(data);
    this.router.navigate(['/commentpage', data]);  //loads comment page of particular movie
  }

  searchpage(){
    console.log("we are searching for entered movie"); //user enters movie name the page directs to comment pageof corresponding movie
    console.log(this.searchmovie);
    let flag=false;
    let id;
    let name=this.searchmovie.toLowerCase();
    let array=this.somedata.results.map(function(value,index,array){
      let title= value.original_title
      if(name == title.toLowerCase()){
        flag=true;
        id=value.id;
        console.log(id);      //conversion of entered movie name in searcbar into lowercase
      }

    })
    if(flag){
      this.watchlistitems.routing=true;
      this.router.navigate(['/commentpage',id]); //if movie exists in records it gets redirected to corresponding commentpage
    }  
    else{
      alert("movie doesnt exists in our record"); 
    }
  }


  timerhide(){
    
    this.timerstatus=!this.timerstatus; //user clicks on croos buttton on timer to hide timer
    
  }

   reloadpage(){
      this.watchlistitems.routing=true; //bringing reload page into action as user is ready to route to next component
   }

    likedmovie(data,liked){
      this.watchlistitems.likedfunction(data,liked); //upon liking particular movie movie details gets pushed into corresponding service
    }

    i:any=0;
    question:any;
    uservalue:any;
    feedback:any;

    critic(type){
      if(type == 'next'){
         if(this.i<20){
          this.question = this.somedata.results[this.i].title;
          this.uservalue=0;
          this.i++;
         }
      }  
      if(type == 'check'){
        console.log(this.somedata.results[this.i].vote_average*10 - this.uservalue);
        let s=this.somedata.results[this.i].vote_average*10 - this.uservalue
        if (s>0){
          this.feedback="you are too high";
        }
      }
  
    }

    quizz(){
      this.router.navigate(['/quiz']); //upon clicking on quizz button it takes to quizzcomponent
      this.reloadpage();
    }

    

}//end of component class
