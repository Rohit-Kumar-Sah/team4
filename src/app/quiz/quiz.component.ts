import { Router } from '@angular/router';
import { ScoreService } from './score.service';
import { QuizapiService } from './../quizapi.service';
import { Component, OnInit, ɵConsole, } from '@angular/core';
import { WatchlistdataService } from '../watchlistdata.service';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizdata: QuizapiService, private scoreservice: ScoreService, private route: Router, private watchlistitems: WatchlistdataService) { }
  public quiz: any[];
  public questions: any;
  public options = [];
  id: number = 0;
  public selectedanswer: any = [];
  public quizanswer: any[] = [];
  score = 0;
  selectedOption:any;
  public quizset:any=[];
  Quizlength:number;
  marking:any=[
                [false,true,false,false],[false,true,false,false],[false,true,false,false],[false,true,false,false],[false,true,false,false],
                [false,true,false,false],[false,true,false,false],[false,true,false,false],[false,true,false,false],[false,true,false,false]
              ]


  ngOnInit(): void {
    this.quizdata.getquiz().subscribe((data: any) => {

     
      this.quiz = data.results;
      this.Quizlength=this.quiz.length;
     
      this.quiz = this.quiz.map(item => {
        item['optionsArray'] = [...item.incorrect_answers]
        item.optionsArray.push(item.correct_answer)
        item.optionsArray.sort();
        item['Q_id'] = this.id++;
        item['Q_rndm_gnrt']=Math.floor(Math.random()*(this.Quizlength+1));
        

        this.watchlistitems.routing = false;//shuts down reload page;

        return item;
      });
      this.quiz.sort((a,b)=>{
        return a.Q_rndm_gnrt - b.Q_rndm_gnrt;
      })
      this.quizset=this.quiz.slice(0,10);

      for(let i=0;i<10;i++){
        this.quizset[i].difficulty=[false,false,false,false];
      }



    });

   






  }


  Answer(Q_id, choice) {


    this.selectedanswer.map(item => {
      if (item.id == Q_id) {

        this.selectedanswer.splice(item.id, 1);


      }
    });

    this.selectedanswer.push({
      'id': Q_id,
      'selectedchoice': choice
    }
    );
    this.selectedOption=choice;
   
    

  }
  check() {
    this.selectedanswer.map(item => {
      for (let i = 0; i < this.quiz.length; i++) {

        if (item.id == this.quiz[i].Q_id) {
          if (item.selectedchoice == this.quiz[i].correct_answer) {
            this.score++;


          }

        }


      }
    })
    //console.log(this.score);
    this.scoreservice.updateScore(this.score);
    this.route.navigate(['/result']);
  }

  option(no,values){
    let j=0;
    this.quizset.map((value)=>{
      if(this.quizset[j].Q_id == no){
        this.quizset[j].difficulty=[false,false,false,false];
        this.quizset[j].difficulty[values]=true;
      }
      j++;
    })
  }
  
}



