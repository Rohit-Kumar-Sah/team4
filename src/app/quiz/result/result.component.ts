import { Router } from '@angular/router';
import { ScoreService } from './../score.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  UrScore: number;
  isCongo: boolean;

  constructor(private myscore: ScoreService, private route: Router) {
    this.isCongo = false;
  }

  ngOnInit(): void {
    this.myscore.currentScore.subscribe((data) => {
      this.UrScore = data;
      if (this.UrScore > 5) {
        this.isCongo = true;
      } else {
        this.isCongo = false;
      }
    });
  }
}
