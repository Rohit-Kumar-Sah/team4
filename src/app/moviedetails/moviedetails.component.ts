import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieapiService } from '../movieapi.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
    public movieDetails:any;
  constructor(
    private route:ActivatedRoute,
    private service:MovieapiService
  ) {
    
   }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.service.getDataByID(id).subscribe(data=>{
      this.movieDetails=data;
    })
    
  }


}
