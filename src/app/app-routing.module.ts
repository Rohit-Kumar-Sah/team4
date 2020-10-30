import { TopmoviesComponent } from './topmovies/topmovies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path : 'sign-up' , component : SignUpComponent},
  {path:'topmovies/:id',component:MoviedetailsComponent},
  {path:'topmovies',component:TopmoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
