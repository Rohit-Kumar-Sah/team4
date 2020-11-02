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
    this.watchlistdata=this.watchlistitems.watchlistarray;
  }

}
