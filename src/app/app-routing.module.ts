import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { MyWallComponent } from './my-wall/my-wall.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Commentpage872957Component } from './commentpage872957/commentpage872957.component';
import { CarrerspageComponent } from './carrerspage/carrerspage.component';



const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path : 'sign-up' , component : SignUpComponent},
  {path:'commentpage/:id',component:Commentpage872957Component},
  {path:'carrers',component:CarrerspageComponent},
  {path : 'sign-up' , component : SignUpComponent},
  {path : 'sign-in' , component : SignInComponent},
  {path : 'mywall' , component : MyWallComponent},
  {path : 'comments' , component : CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
