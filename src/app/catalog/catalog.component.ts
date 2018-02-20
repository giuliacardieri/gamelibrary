import { Component, OnInit } from '@angular/core';

// game model and game service for get/post
import { Game } from '../game.model';
import { GameService } from '../game.service';

// date pipe to edit date format
import { DatePipe } from '@angular/common';

// forms
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

// rxjs for observable, search..
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {
  games: Game[];
  today = Date.now(); // gets today date to create correct format on videogame's year

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private gameService: GameService,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('');

    // the search form to filter videogames
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    // controls the search on all videogames
    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(searchTerm => 
      this.gameService
        .getGames(searchTerm)
        .catch(error=>Observable.from([]))) 
        .subscribe(games => this.games = games);

  	this.getGames();
  }

  // get games from game service
  // games.sort sorts the results ordering by most recent year
  // note: there might be better ways to make this sort using angular
  // since pipes are discouraged by Angular I decided to take this js/function approach
  getGames(): void {
  	this.gameService.getGames().subscribe(games => this.games = 
      games.sort(function(a, b){
        if ( a.year < b.year )
            return 1;
        if ( a.year > b.year )
            return -1;
        return 0;
      }));
	}

}
