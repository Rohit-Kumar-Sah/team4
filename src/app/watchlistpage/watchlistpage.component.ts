import { Component, OnInit } from '@angular/core';
import { WatchlistdataService } from '../watchlistdata.service';
import{interval, timer} from 'rxjs';

@Component({
  selector: 'app-watchlistpage',
  templateUrl: './watchlistpage.component.html',
  styleUrls: ['./watchlistpage.component.css']
})
export class WatchlistpageComponent implements OnInit {
  watchlistdata:any;
  constructor(private watchlistitems:WatchlistdataService) { }

  ngOnInit(): void {
    
    this.watchlistdata=this.watchlistitems.watchlistarray;
    
  }

  deletefromwatchlist(data:any){
   this.watchlistitems.watchlistcontrol(data,false);
   this.watchlistdata=this.watchlistitems.watchlistarray;
  }

  pintotopofwatchlist(data:any){
    let index=this.watchlistitems.watchlistarray.indexOf(data);
    if (index > -1) {
      this.watchlistitems.watchlistarray.splice(index, 1);
    }
    this.watchlistitems.watchlistarray.unshift(data);
  }
  
  timer=interval(10);
  const=this.timer.subscribe(dat=>{
   
  })
}
