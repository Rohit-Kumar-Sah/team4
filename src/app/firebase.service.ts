
//will have code for working with DB (firebase)

import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class FireBaseService {
    

    constructor(private http: HttpClient) {
    }

    //store new user in DB
    addNewUser(name, email, password) {

        // ************************************************
        //check for existence (will be done in authentication part)
        // ************************************************

        let username = name + '&' + email;   // the db stores it as to uniquely identify every user
        //add user to DB
        this.http.post('https://team4-506c8.firebaseio.com/testuser/' + username + '.json', { password: password }).subscribe();
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
                                    return true
                            }
                        }
                    }
                    return result
                }),

            )
    }



}
