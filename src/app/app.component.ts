import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeamD';

  showOverlay = true;
  sastra:any=10;
  constructor(private router: Router) {
    let d=true;

    this.router.events.subscribe((event: RouterEvent) => { 
     if (event instanceof NavigationStart) {
      this.showOverlay = true;  
     }
    
     
     if (event instanceof NavigationEnd) {
      setTimeout(()=>{
       this.showOverlay=false;
      },2000)
     }
    })
    

    }

    
}
