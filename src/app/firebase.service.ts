
//will have code for working with DB (firebase)

import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from "@angular/core";
import { filter, map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class FireBaseService {
    
   user  //name&mail
   username //name
    commentsArray: any;
  theotheruser: any;
  theotherusername: any;
    constructor(private http: HttpClient) {
    }

    //store new user in DB on SignUp
    addNewUser(name, email, password) {

        // ************************************************
        //check for existence (will be done in authentication part)
        // ************************************************

        let username = name + '&' + email;   // the db stores it as to uniquely identify every user
        //add user to DB
        this.http.post('https://team4-506c8.firebaseio.com/testuser/' + username + '.json', { password: password })
        .subscribe(data=> {alert("Account created. Sign-in to continue")
        this.http.put('https://team4-506c8.firebaseio.com/testuser/'+ username +'/info.json',{bio:"my bio is here"}).subscribe()
        this.http.put('https://team4-506c8.firebaseio.com/testuser/'+ username +'/notifications.json',["all notifications."]).subscribe()
    }
        );

        // this.http.post('https://team4-506c8.firebaseio.com/testuser/' + username + '.json', { password: password }).subscribe();
    }



    //signin user to DB 
    signinUser(username, password) {
        let result = false  // false if credentials is invalid for signin , else true
        return this.http.get('https://team4-506c8.firebaseio.com/testuser.json')
            .pipe(
                map((data) => {
                    //check for existance of username
                    for (let item in data) {
                        if (item.slice(0, item.indexOf('&')) === username) {
                            //retrieve password for that username in DB and check for its password match 
                            for (let key in data[item]) {
                                if (data[item][key].password === password)
                                   { 
                                       this.username = username
                                    this.user = item //checking if username is being captured
                                        return true}
                            }
                        }
                    }
                    return result
                }),
)}

totalreview(person){
   return this.http.get('https://team4-506c8.firebaseio.com/testuser/'+person+'/activities/.json')
}

    //add a review to db
    addreview(movieName, review , stars,user=this.user)
    {
        console.log(movieName, review , stars,user)
        //include the review in user db
        this.http.put('https://team4-506c8.firebaseio.com/testuser/'+this.user+'/activities/'+  movieName +'/.json',{movie: movieName, author : user, review : review, stars : stars,totalLikes : 0 , likes:[stars]}).subscribe();
        //include the review in film db
       return this.http.put('https://team4-506c8.firebaseio.com/allreviews/'+movieName+'/'+user+'/.json',{movie: movieName, review : review, stars : stars})
    }



    //retrieve a reviews from db for user wall
    myreviews()
    {
        // retrieve reviews from user's db
       return this.http.get('https://team4-506c8.firebaseio.com/testuser/'+this.user+'/activities.json').pipe(
            // map(data=> console.log(data))
        )

    }
    visiteduserreviews(username){
         // retrieve reviews from user's db
       return this.http.get('https://team4-506c8.firebaseio.com/testuser/'+username+'/activities.json').pipe(
        // map(data=> console.log(data))
    )
    }

    getAllCommentsOf(movieName)
    {
        console.log("moviename = ",movieName)
    return this.http.get('https://team4-506c8.firebaseio.com/allreviews/'+movieName+'.json')
    // .pipe(
    //     map(data=>{
    //        return Object.values(data)

    //     })
    //     )
    }




// ************************************************************ doesnt belongs here in this service, but in movies wala service 
    //get all name and return an array
    getmovieName()
     {
         
        
     }

// this store the comment 
originalAuthor = ""
commentMadeBy = ""
commentId=""
commentdata(originalAuthor,commentMadeBy,commentId)
{
    this.originalAuthor = originalAuthor 
    this.commentMadeBy = commentMadeBy
    this.commentId= commentId

    console.log(originalAuthor,commentMadeBy,commentId)
}



grabcomment(){

    return this.http.get('https://team4-506c8.firebaseio.com/testuser/'+this.commentMadeBy+'/activities/'+this.commentId+'.json')

}


grabAllUser()
{
    return this.http.get('https://team4-506c8.firebaseio.com/testuser.json').pipe(
         
       map(data=>
        {
            const arr=[] ;
            const usernamearrray=Object.keys(data)
            for(let name of usernamearrray){
                arr.push(name.slice(0, name.indexOf('&'))) 
                
            }
            return [arr, usernamearrray]
        }
        
       
       
       )
        
        
    )
}
isLoggedin(){
    if(this.username)
    return true;
    else
    return false;
}

}
