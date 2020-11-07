import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { WatchlistdataService } from './watchlistdata.service';
import { Commentpage872957Component } from './commentpage872957/commentpage872957.component';
import { CarrerspageComponent } from './carrerspage/carrerspage.component';
import { ReactiveFormsModule } from '@angular/forms';

import { TopmoviesComponent } from './topmovies/topmovies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { MyWallComponent } from './my-wall/my-wall.component';
import { CommentsComponent } from './comments/comments.component';
import { NewreleaseslodhiComponent } from './newreleaseslodhi/newreleaseslodhi.component';
import { QuizComponent } from './quiz/quiz.component';
import { WatchlistpageComponent } from './watchlistpage/watchlistpage.component';
import { OtheruserComponent } from './otheruser/otheruser.component';
import { OtherusercommentsComponent } from './otherusercomments/otherusercomments.component';



@NgModule({
  declarations: [
    AppComponent,
    MyWallComponent,
    SignInComponent,
    SignUpComponent,
    Commentpage872957Component,
    CarrerspageComponent,
    CommentsComponent,
    TopmoviesComponent,
    MoviedetailsComponent,
    HomepageComponent,
    NewreleaseslodhiComponent,
    WatchlistpageComponent,
    QuizComponent,
    OtheruserComponent,
    OtherusercommentsComponent, 
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [WatchlistdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
