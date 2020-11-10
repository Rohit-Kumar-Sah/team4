import { ScoreService } from './../score.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

 
  UrScore:number
  constructor(private myscore :ScoreService) { }
  

  ngOnInit(): void {

    this.myscore.currentScore.subscribe(data=>
      this.UrScore=data
      )
  }

}
