import { Router } from '@angular/router';
import { ScoreService } from './score.service';
import { QuizapiService } from './../quizapi.service';
import { Component, OnInit,  } from '@angular/core';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizdata: QuizapiService, private scoreservice:ScoreService, private route:Router) { }
  public quiz: any;
  public questions: any;
  public options = [];
  id: number = 0;
  public selectedanswer:any=[];
  public  quizanswer:any[]=[];
  score=0;
  

  ngOnInit(): void {
    this.quizdata.getquiz().subscribe((data: any) => {
      // console.log(data);
      this.quiz = data.results;
     //console.log(this.quiz);
      this.quiz = this.quiz.map(item => {
        item['optionsArray'] = [...item.incorrect_answers]
        item.optionsArray.push(item.correct_answer)
        //item.optionsArray.sort();
        item['Q_id'] = this.id++;
        return item;
      });
      //console.log(this.quiz);

      // console.log(typeof(this.quiz));



    });
   







  }
  

  Answer(Q_id, choice) {
     let flag=false;
    
    this.selectedanswer.map(item=>{
      if(item.id==Q_id){
    //   flag=true;
    //  console.log(item.id);
    //  console.log(item);
    this.selectedanswer.splice(item.id,1);
    //  this.selectedanswer.push({
    //   'id':Q_id,
    //   'selectedchoice':choice
    // });
     

      }
    });
   
    this.selectedanswer.push({
      'id':Q_id,
      'selectedchoice':choice
    }
    );
    console.log(this.selectedanswer);

  }
  check(){
    this.selectedanswer.map(item =>{
      for(let i=0;i<this.quiz.length;i++){

        if(item.id==this.quiz[i].Q_id){
          if(item.selectedchoice==this.quiz[i].correct_answer){
            this.score++;
           
            //console.log(this.quiz[i].correct_answer);
          }

        }

        
      }
    })
    //console.log(this.score);
    this.scoreservice.updateScore(this.score);
    this.route.navigate(['/result']);


    

  }

}



