import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FireBaseService } from '../firebase.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  loading = "loading..."
  responsesGenerated = false
  thepost
  author 
  submitComment
  allcomments
  //  = {fdfd:{comment: "wowwa", commentedBy :"raa"}}

  constructor(private post : FireBaseService , private http : HttpClient, private fb : FormBuilder,private location : Location ) { }
  
  ngOnInit(): void {
    this.submitComment = this.fb.group(
      {
        mycomment : ['',Validators.required]
      }
    )
   this.http.get('https://team4-506c8.firebaseio.com/testuser/'+this.post.user+'/activities/'+this.post.commentId+'/comments.json')
   .subscribe(data=> {this.allcomments=data ; console.log(data)})


  
    this.post.grabcomment().subscribe( data=> {this.thepost=data; this.responsesGenerated=true ; console.log(data)} )
    this.author = this.post.username
  }

  back(){
this.location.back()
  }

postIt(){
  console.log("hero")
  console.log(this.submitComment.controls.mycomment.value)
   this.http.post('https://team4-506c8.firebaseio.com/testuser/'+this.post.user+'/activities/'+this.post.commentId+'/comments.json',{comment : this.submitComment.controls.mycomment.value , commentedBy : this.post.user }).subscribe(data=> this.showComment())

}

showComment(){
  this.http.get('https://team4-506c8.firebaseio.com/testuser/'+this.post.user+'/activities/'+this.post.commentId+'/comments.json').subscribe(data=> {this.allcomments=data ; console.log(data)})

}
  

}
