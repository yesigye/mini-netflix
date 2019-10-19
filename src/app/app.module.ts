import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { appRoutes } from "./routes";
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';

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
    LoginComponent,
    RegisterComponent,
    MoviesListComponent,
    MovieCardComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
