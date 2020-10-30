import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { MyWallComponent } from './my-wall/my-wall.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
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
