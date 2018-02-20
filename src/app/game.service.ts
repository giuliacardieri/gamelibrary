import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Game } from './game.model';
import { GAME_API } from './app.api';

@Injectable()
export class GameService {

  constructor(private http: Http) {}

  // get games from json-service (or back-end if it existed)
  // search string is optional - only used to filter videogames on the catalog
	getGames(search?: string ): Observable<Game[]> {
    return this.http.get(`${GAME_API}/games`, {params: {q: search}})
    .map(response => response.json());
  }

  // post games that user inserted on the form to json-service (or back-end if it existed)
  postGames(game: Game): Observable<Game[]> {
    const headers = new Headers()
    headers.append('Content-type', 'application/json')
    return this.http.post(`${GAME_API}/games`, 
        JSON.stringify(game), 
        new RequestOptions({headers: headers}))
        .map(response => response.json())
  }
}
