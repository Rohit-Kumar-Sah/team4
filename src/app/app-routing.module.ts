import { TopmoviesComponent } from './topmovies/topmovies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { CommentsComponent } from './comments/comments.component';
 import { MyWallComponent } from './my-wall/my-wall.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Commentpage872957Component } from './commentpage872957/commentpage872957.component';
import { CarrerspageComponent } from './carrerspage/carrerspage.component';
import { NewreleaseslodhiComponent } from './newreleaseslodhi/newreleaseslodhi.component';
import { WatchlistpageComponent } from './watchlistpage/watchlistpage.component';
import { OtheruserComponent } from './otheruser/otheruser.component';
import { OtherusercommentsComponent } from './otherusercomments/otherusercomments.component';
import {MoviecriticComponent} from './moviecritic/moviecritic.component';


const routes: Routes = [
  {path:'',component: HomepageComponent},

  {path : 'sign-up' , component : SignUpComponent},
  {path:'topmovies/:id',component:MoviedetailsComponent},
  {path:'topmovies',component:TopmoviesComponent},

  {path:'commentpage/:id',component:Commentpage872957Component},
  {path:'carrers',component:CarrerspageComponent},
  {path : 'sign-in' , component : SignInComponent},
  {path : 'mywall' , component : MyWallComponent},
  {path : 'comments' , component : CommentsComponent},
  {path:'newreleases',component:NewreleaseslodhiComponent},
  {path:'watchlist',component:WatchlistpageComponent},
  {path:'otheruser/:user',component : OtheruserComponent},
  {path:'otherusercomments',component : OtherusercommentsComponent},
  {path:'moviecritic',component:MoviecriticComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
