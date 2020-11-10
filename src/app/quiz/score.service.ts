import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
   score = new BehaviorSubject(0);
  currentScore = this.score.asObservable();

  constructor() { }
  updateScore(newscore:number){
    this.score.next(newscore);
  }

}
