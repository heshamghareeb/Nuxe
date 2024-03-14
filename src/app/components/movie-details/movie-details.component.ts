import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorDetails } from 'src/app/common/interfaces/actor_details.interface';
import { MoviesService } from 'src/app/common/services/movies.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  item:any;
  similarMovies:any[] = [];
  mediaType:string = '';
  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService){}

  ngOnInit(){
    let {movie_id, media_type} = this._ActivatedRoute.snapshot.params;
    this.mediaType = media_type;
    this.getSimilar(movie_id, media_type)
  }

  getSimilar(movie_id:string, media_type:string){
    console.log(media_type,'media_type');

    this._MoviesService.getItemDetails(movie_id, media_type).subscribe({
      next:(data)=> {this.item = data
        console.log(data, 'getSimilar  app-moviedetails');
      }
    });
    this._MoviesService.getSimilar(movie_id, media_type).subscribe({
      next:(data)=> this.similarMovies = data.results
    });
  }


}
