import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WatchlistdataService } from '../watchlistdata.service';
import{Router}from '@angular/router';
import { MovieapiService } from '../movieapi.service';

@Component({
  selector: 'app-newreleaseslodhi',
  templateUrl: './newreleaseslodhi.component.html',
  styleUrls: ['./newreleaseslodhi.component.css']
})
export class NewreleaseslodhiComponent implements OnInit {

  newmovies: any=[];
  newmovies2: any=[];
  moviedata:any=[];
  moviedata1:any=[];
  
  constructor(private watchlistitems:WatchlistdataService,private router:Router,private _movieapi:MovieapiService) { }

  ngOnInit(): void {
    
    this._movieapi.getDataPopular().subscribe(data =>{
      
      this.moviedata=data;
      this.sortarray();
      this.moviedata.results.sort((a, b) => b.release_date - a.release_date);
      
      this.newmovies = this.moviedata.results.slice(0,4);
      this.newmovies2 = this.moviedata.results.slice(4,8);

      setTimeout(()=>{
      this.watchlistitems.routing=false;
      this.preservewatchlist();
      this.preservelike();
      },1000);
      
    })

  
  }
  i:any=0;
    sortarray(){

      this.moviedata.results.map((value)=>{
        this.moviedata.results[this.i].release_date = new Date(value.release_date);
        this.i++;
       
      })
    }

    pushdataintowatchlist(data,state){
      this.watchlistitems.watchlistcontrol(data,state);
    }

    loadcommentpage(data:any)
    {  
      console.log(data);
      this.router.navigate(['/commentpage',data])
       
    }

    likedmovie(data,liked){
      
      this.watchlistitems.likedfunction(data,liked);
    }
     
    preservelike(){ 
      //if(this.dataset1.length >0 && this.watchlistitems.likedmovies.length > 0){
  
        this.newmovies.map((value)=>{
           this.watchlistitems.likedmovies.map((values)=>{
              if(value.id == values.id){
                this.newmovies[(this.newmovies.indexOf(value))].video = true;//if liked movie in liked service and pulled movie matches it gets liked
                
              }
          })
        })
  
        this.newmovies2.map((value)=>{
          this.watchlistitems.likedmovies.map((values)=>{
             if(value.id == values.id){
               this.newmovies2[(this.newmovies2.indexOf(value))].video = true;//if liked movie in liked service and pulled movie matches it gets liked
               
             }
         })
       })
  
    }  

    preservewatchlist(){
      //if(this.dataset1.length >0 && this.watchlistitems.likedmovies.length > 0){
 
       this.newmovies.map((value)=>{
         this.watchlistitems.watchlistarray.map((values)=>{
            if(value.id == values.id){
              this.newmovies[(this.newmovies.indexOf(value))].adult = true;//if liked movie in liked service and pulled movie matches it gets liked
              
            }
        })
      })
 
      this.newmovies2.map((value)=>{
        this.watchlistitems.watchlistarray.map((values)=>{
           if(value.id == values.id){
             this.newmovies2[(this.newmovies2.indexOf(value))].adult = true;//if liked movie in liked service and pulled movie matches it gets liked
             
           }
       })
     })
   }

   console(id){
     this.router.navigate(['newreleases',id]);
   }

   reloadpage(){
     this.watchlistitems.routing=true;
   }

}
