import { HttpClient } from '@angular/common/http';
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
  Name = this.userinfo.user
  totalmoviereviewed: number;
  
  
  constructor(private userinfo : FireBaseService, private router : Router, private http : HttpClient ) { }

  ngOnInit(): void {
    this.userinfo.totalreview( this.visitedusername ).subscribe(data=>{this.totalmoviereviewed=Object.keys(data).length; console.log(this.totalmoviereviewed)})

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

  refresh(){
    this.userinfo.visiteduserreviews(this.visitedusername).subscribe(data => this.activities = data) // loads all review 

  }

  alllikes
like(key){
  let obje;
  this.http.get('https://team4-506c8.firebaseio.com/testuser/'+this.visitedusername+'/activities/'+key+'.json')
  .subscribe(data=>{ obje= data;  obje.likes.push(this.userinfo.user) ; console.log(obje) ; obje.totalLikes+=1; this.alllikes = obje.likes.length  ; 

  this.http.put('https://team4-506c8.firebaseio.com/testuser/'+this.visitedusername+'/activities/'+key+'.json',obje)
  .subscribe(data=>{obje= data;  console.log("latest obje",obje); this.refresh() })
 
})
  }


dislike(key){
  let obje;
  this.http.get('https://team4-506c8.firebaseio.com/testuser/'+this.visitedusername+'/activities/'+key+'.json')
  .subscribe(data=>{ obje= data;  obje.likes.splice(obje.likes.indexOf(this.userinfo.user),1) ; console.log(obje) ; 
      obje.totalLikes-=1;  this.alllikes = obje.likes.length;

  this.http.put('https://team4-506c8.firebaseio.com/testuser/'+this.visitedusername+'/activities/'+key+'.json',obje)
  .subscribe(data=>{obje= data;  console.log("latest obje",obje);  this.refresh()})
 
})
}

}
