import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeemorePipe } from 'src/app/common/pipes/seemore.pipe';
import { MoviesService } from 'src/app/common/services/movies.service';
import { MovieCardComponent } from "../movie-card/movie-card.component";

@Component({
    selector: 'app-actor',
    standalone: true,
    templateUrl: './actor.component.html',
    styleUrl: './actor.component.css',
    imports: [
        CommonModule,
        SeemorePipe,
        MovieCardComponent
    ]
})
export class ActorComponent {

  actorDetails:any;
  actorMovies:any;
  mediaType:string = '';
  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService){

  }

  ngOnInit(){
    let {person_id, person_type} = this._ActivatedRoute.snapshot.params;

    this.getActorDetails(person_id, person_type)

  }

  getActorDetails(person_id:string, media_type:string){

    this._MoviesService.getActorDetails(person_id).subscribe({
      next:(data)=> {this.actorDetails = data
        console.log(data, 'getActorDetails  ACTOR');
      }
    });


    this._MoviesService.getActorMovies(person_id).subscribe({
      next:(data)=> {this.actorMovies = data.cast
      console.log(data,'getActorMovies');
      }
    });
  }

  // Get movie
  // getMovieDetails(){
  //   this._MoviesService.getItemDetails('movie_id', 'media_type').subscribe({
  //     next:(data)=> {this.actorMovies = data
  //       console.log(data, 'getSimilar  app-moviedetails');
  //     }
  //   });
  // }

}
