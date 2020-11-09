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
  
  showOverlay = this.watchlist.routing ;
  sastra1 = interval(100);
  sastra:any=10;
  overlay:boolean=true;
  sast=this.sastra1.subscribe(val=>{
    this.showOverlay=this.watchlist.routing ;
    console.log("hii");
    console.log(this.watchlist.routing);
  })
  constructor(private router: Router,private watchlist:WatchlistdataService) {
  

    this.router.events.subscribe((event: RouterEvent) => { 
      if (event instanceof NavigationStart) {
       this.showOverlay = true;  
      }
     
     
      if (event instanceof NavigationEnd) {
        
      }

    })
    
  }
    

    
}
