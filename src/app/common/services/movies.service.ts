import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { BASE_URL } from './api-config';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient, ) {}

  getTrending(mediaType:string):Observable<any>{
    return this._HttpClient.get(`${BASE_URL}/trending/${mediaType}/week`)
  }

  getItemDetails(movie_id:string, mediaType:string):Observable<any>{
    return this._HttpClient.get(`${BASE_URL}/${mediaType}/${movie_id}`)
  }

  getSimilar(movie_id:string, mediaType:string):Observable<any>{
    return this._HttpClient.get(`${BASE_URL}/${mediaType}/${movie_id}/similar?language=en-US&page=1`)
  }

  getActorDetails(person_id:string):Observable<any>{
    return this._HttpClient.get(`${BASE_URL}/person/${person_id}?language=en-US`)
  }
  getActorMovies(person_id:string):Observable<any>{
    return this._HttpClient.get(`${BASE_URL}/person/${person_id}/movie_credits?language=en-US`)
  }
}
