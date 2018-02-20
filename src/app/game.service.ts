import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Game } from './game.model';
import { GAME_API } from './app.api';

@Injectable()
export class GameService {

  constructor(private http: Http) {}

	getGames(): Observable<Game[]> {
    return this.http.get(`${GAME_API}/games`)
      .map(response => response.json())
  }

  postGames(game: Game): Observable<Game[]> {
    const headers = new Headers()
    headers.append('Content-type', 'application/json')
    return this.http.post(`${GAME_API}/games`, 
        JSON.stringify(game), 
        new RequestOptions({headers: headers}))
        .map(response => response.json())
  }
}
