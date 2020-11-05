import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizapiService {

  constructor(private http:HttpClient) { }

  getquiz(){
    return this.http.get("https://opentdb.com/api.php?amount=30&category=11&difficulty=easy&type=multiple");
  }
}
