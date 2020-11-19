import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';


import { WatchlistdataService } from './watchlistdata.service';
import{interval} from'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeamD';
  remainder=false;
  showOverlay = this.watchlist.routing ;
  sastra1 = interval(1000);
  sastra:any=10;
  overlay:boolean=true;
  sast=this.sastra1.subscribe(val=>{
    this.showOverlay=this.watchlist.routing ;
    this.remainder=this.watchlist.remainderstate;
    
  })
  constructor(private router: Router,private watchlist:WatchlistdataService) {
 
  }
   backtonormal(){
     this.watchlist.remainderstate=false;
   } 
   configure(){
     this.backtonormal();
     this.router.navigate(['remainderpage'])
   }
    
}
