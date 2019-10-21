import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
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
