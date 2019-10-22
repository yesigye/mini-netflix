import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoritesComponent } from './favorites/favorites.component';

import { appRoutes } from "./app.routes";

import {
  MovieRouteActivator,
  MoviesService,
  MovieResolver,
  MovieCardComponent,
  MovieDetailsComponent,
  MoviesComponent,
 } from "./movies/index";

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    FavoritesComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    NotFoundComponent,
  ],
  providers: [
    MoviesService,
    MovieRouteActivator,
    MovieResolver,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
