import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireBaseService } from '../firebase.service';

@Component({
  selector: 'app-otheruser',
  templateUrl: './otheruser.component.html',
  styleUrls: ['./otheruser.component.css']
})
export class OtheruserComponent implements OnInit {

  visiteduser = this.userinfo.theotheruser
  visitedusername = this.userinfo.theotherusername

  allusername: any[];
  fullusername: any[];
  activities: Object;
  
  constructor(private userinfo : FireBaseService, private router : Router ) { }

  ngOnInit(): void {
    this.userinfo.grabAllUser().subscribe(data=>{this.allusername=data[0]; this.fullusername=data[1]; console.log(data[0],data[1])})

    this.userinfo.visiteduserreviews(this.visitedusername).subscribe(data => this.activities = data) // loads all review 

  }

  grabOtherUser(user)
  {
    if(this.fullusername[this.allusername.indexOf(user.value)]){
    this.userinfo.theotheruser= this.fullusername[this.allusername.indexOf(user.value)]
    this.router.navigate([`/otheruser/${user.value}`])


    }
    else
    console.log("invalid username entered")
  
  }
  
  // ----
  comment(key,visiteduser){
    // save the comment info and user info 
    this.userinfo.commentdata(this.visiteduser,this.visitedusername,key)
    // take username amd key to shoe comment and all other comments
this.router.navigate(['/otherusercomments'])


  }


}
