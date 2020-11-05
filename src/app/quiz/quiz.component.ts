import { QuizapiService } from './../quizapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor( private quizdata:QuizapiService) { }
  public quiz:any;
  public questions:any;

  ngOnInit(): void {
    this.quizdata.getquiz().subscribe(data=>{
      console.log(data);
      this.quiz=data;
      console.log(typeof(this.quiz));
      // this.questions=this.quiz.resul
  });

}
}
