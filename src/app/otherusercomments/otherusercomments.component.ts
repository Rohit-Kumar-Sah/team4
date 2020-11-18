import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FireBaseService } from '../firebase.service';
import { Location } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-otherusercomments',
  templateUrl: './otherusercomments.component.html',
  styleUrls: ['./otherusercomments.component.css']
})
export class OtherusercommentsComponent implements OnInit {


  loading = "loading..."
  responsesGenerated = false
  thepost
  author = this.post.theotheruser
  visitor = this.post.user
  submitComment
  allcomments

  constructor( private userinfo : FireBaseService, private router : Router , private post: FireBaseService, private http: HttpClient, private fb: FormBuilder, private location : Location) { }

  ngOnInit(): void {
    this.submitComment = this.fb.group(
      {
        mycomment: ['', Validators.required]
      }
    )
      this.http.get('https://team4-506c8.firebaseio.com/testuser/' + this.post.theotherusername + '/activities/' + this.post.commentId + '/comments.json')
    .subscribe(data => { this.allcomments = data; console.log(data) })



    this.post.grabcomment().subscribe(data => { this.thepost = data; this.responsesGenerated = true; console.log(data) })

  }

  back(){
 this.location.back()
  }
  postIt() {
    console.log("hero")
    console.log(this.submitComment.controls.mycomment.value)
    this.http.post('https://team4-506c8.firebaseio.com/testuser/' + this.post.theotherusername + '/activities/' + this.post.commentId + '/comments.json', { comment: this.submitComment.controls.mycomment.value, commentedBy: this.post.user }).subscribe(data=>this.showComment())

  }

  showComment() {
    this.http.get('https://team4-506c8.firebaseio.com/testuser/' + this.post.theotherusername + '/activities/' + this.post.commentId + '/comments.json').subscribe(data => { this.allcomments = data; console.log(data) })

  }

  deletecomment(key){
    this.http.delete('https://team4-506c8.firebaseio.com/testuser/' + this.post.theotherusername + '/activities/' + this.post.commentId + '/comments/'+key+'.json').subscribe(data => {  this.showComment() })

  }

  grabotheruser(username,user)
  {
    if(user != this.userinfo.username){
    this.userinfo.theotheruser = user  
    this.userinfo.theotherusername= username
    this.router.navigate([`/otheruser/${user}`])

    }
    else
    {
      this.router.navigate([`/mywall`])
    }
}

}