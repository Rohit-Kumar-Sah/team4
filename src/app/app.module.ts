import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TopmoviesComponent } from './topmovies/topmovies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    TopmoviesComponent,
    MoviedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
