//will have code for working with DB (firebase)
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn : 'root'
})
export class FireBaseService
{
    firebase ;
    
    constructor(private http : HttpClient){
    }

    addNewUser(name,email,password){
        //check for existence (will be done in authentication part)

        let username = name + '&' + email ;        // the db stores it as to uniquely identify every user
        //add user to DB
        this.http.post('https://team4-506c8.firebaseio.com/testuser/'+username+'.json',{password: password}).subscribe();
    }
}