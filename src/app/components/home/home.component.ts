import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesService } from 'src/app/common/services/movies.service';
import { SearchPipe } from 'src/app/common/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { ActorComponent } from "../actor/actor.component";
import { ActorsComponent } from '../actors/actors.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        NavbarComponent,
        CommonModule,
        RouterModule,
        NgxSpinnerModule,
        SearchPipe,
        FormsModule,
        MovieCardComponent,
        ActorComponent,
        ActorsComponent
    ]
})
export class HomeComponent {

  constructor(private _MoviesService:MoviesService ) {}

  char:string = "";
  trendingMovies:any[] = [];
  trendingTv:any[] = [];
  trendingpeople:any[] = [];

  ngOnInit(): void {
    this._MoviesService.getTrending("movie").subscribe({
      next:(data) => {this.trendingMovies = data.results.slice(0,10)
        console.log(this.trendingMovies);}
    });

    this._MoviesService.getTrending("tv").subscribe({
      next:(data) => this.trendingTv = data.results.slice(0,10)
    });
    this._MoviesService.getTrending("person").subscribe({
      // next:(data) => this.trendingpeople = data.results.slice(0,10)
      next:(data) => {this.trendingpeople = data.results.filter((item:any)=>item.profile_path).slice(0,10)
      console.log(data);
      }
    });

  }
}
