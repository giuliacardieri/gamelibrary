import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../game.model';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})

export class GameFormComponent {
	games: Game[];
  maxDate = new Date();

	constructor(
    private location: Location,
    private router: Router,
    private gameService: GameService
  ) {}

  consoles = ['PS2', 'PS3', 'PS4', 'Game Cube', 'Game Boy Color', 'Game Boy Advance', 'Nintendo Wii', 'Nintendo Switch'];

  goBack(): void {
    this.location.back();
  }

  onSubmit(form) {
  	this.postGames(form);
  }

  postGames(games: Game): void {
  	this.gameService.postGames(games)
  		.subscribe( (games.title : string) => {
				console.log('game added ${gameId)')
				this.router.navigate(['/catalog'])
  		})
	}
}

