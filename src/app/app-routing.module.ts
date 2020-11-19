import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './quiz/result/result.component';
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
import { LikedmoviesComponent } from './likedmovies/likedmovies.component';
import { UsertimedataComponent } from './usertimedata/usertimedata.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from './auth-guard.service';



const routes: Routes = [
  {path:'',component: HomepageComponent},
  {path :'sign-up' , component : SignUpComponent},
  {path:'topmovies/:id',component:MoviedetailsComponent, canActivate:[AuthGuard]},
  {path:'newreleases/:id',component:MoviedetailsComponent, canActivate:[AuthGuard]},
  {path:'topmovies',component:TopmoviesComponent, canActivate:[AuthGuard]},
  {path:'commentpage/:id',component:Commentpage872957Component, canActivate:[AuthGuard]},
  {path:'carrers',component:CarrerspageComponent, canActivate:[AuthGuard]},
  {path:'sign-in' , component : SignInComponent},
  {path:'mywall' , component : MyWallComponent,canActivate:[AuthGuard]},
  {path:'comments' , component : CommentsComponent, canActivate:[AuthGuard]},
  {path:'newreleases',component:NewreleaseslodhiComponent, canActivate:[AuthGuard]},
  {path:'watchlist',component:WatchlistpageComponent,  canActivate:[AuthGuard]},
  {path:'result',component:ResultComponent, canActivate:[AuthGuard]},
  {path:'quiz',component:QuizComponent, canActivate:[AuthGuard]},
  {path:'otheruser/:user',component : OtheruserComponent, canActivate:[AuthGuard]},
  {path:'otherusercomments',component : OtherusercommentsComponent, canActivate:[AuthGuard]},
  {path:'moviecritic',component:MoviecriticComponent, canActivate:[AuthGuard]},
  {path:'usertimedata',component:UsertimedataComponent, canActivate:[AuthGuard]},
  {path:'likedmovies',component:LikedmoviesComponent, canActivate:[AuthGuard]},
  {path:'remainderpage',component:UsertimedataComponent, canActivate:[AuthGuard]},
  {path:'feedback',component:FeedbackComponent}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }