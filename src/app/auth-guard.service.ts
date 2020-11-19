import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FireBaseService } from './firebase.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private userinfo : FireBaseService, private router : Router ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        
    if(this.userinfo.isLoggedin()){
            return true;
        }
        else {
            alert("Kindly Log-in or Sign-up to Proceed ")
        this.router.navigate(['/sign-in'])
        
    }

    // return true;
    }
}