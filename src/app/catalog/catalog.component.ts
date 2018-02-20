import { Component, OnInit } from '@angular/core';

import { Game } from '../game.model';
import { GameService } from '../game.service';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {
  games: Game[];
  today = Date.now();

  constructor(private gameService: GameService) { }

  ngOnInit() {
  	this.getGames();
  }

  getGames(): void {
  	this.gameService.getGames().subscribe(games => this.games = games);
	}

}
