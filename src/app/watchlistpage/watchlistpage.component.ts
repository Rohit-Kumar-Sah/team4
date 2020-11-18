import { Component, OnInit } from '@angular/core';
import { WatchlistdataService } from '../watchlistdata.service';

@Component({
  selector: 'app-watchlistpage',
  templateUrl: './watchlistpage.component.html',
  styleUrls: ['./watchlistpage.component.css']
})
export class WatchlistpageComponent implements OnInit {
  watchlistdata:any;
  constructor(private watchlistitems:WatchlistdataService) { }

  ngOnInit(): void {
    let uniqueChars = [...new Set(this.watchlistitems.watchlistarray)];
    this.watchlistitems.watchlistarray=uniqueChars;
    this.watchlistdata=this.watchlistitems.watchlistarray;//code to remove duplicates from watchlistdata
    
  }

  deletefromwatchlist(data:any){
   this.watchlistitems.watchlistcontrol(data,false);
  }

  pintotopofwatchlist(data:any){
    let index=this.watchlistitems.watchlistarray.indexOf(data);
    if (index > -1) {
      this.watchlistitems.watchlistarray.splice(index, 1);
    }
    this.watchlistitems.watchlistarray.unshift(data);
  }

}
