import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../game.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})

export class GameFormComponent {
	games: Game[];
  maxDate = new Date(); // maxDate for Date of completion is today

	constructor(
    private location: Location,
    private router: Router,
    private gameService: GameService,
    public snackBar: MatSnackBar
  ) {}

  // array with all console names
  consoles = ['PS2', 'PS3', 'PS4', 'Game Cube', 'Nintendo Wii', 'Nintendo Wii U', 'Nintendo Switch', 'Xbox One', 'Xbox 360'];

  // back function to allow user to navigate back to catalog when he/she is on the form
  goBack(): void {
    this.location.back();
  }

  // on gameForm submit
  onSubmit(formContent, gameForm) {
    gameForm.resetForm();
    gameForm.reset();
  	this.postGames(formContent);
  }

  // get content from form and post to json-service (or back-end if it existed)
  postGames(games: Game): void {
  	this.gameService.postGames(games)
  		.subscribe( (value : Game[]) => {
        this.snackBar.open('Game added to catalog!', 'Dismiss');
				//console.log('game added ${gameId)')
				//this.router.navigate(['/catalog']) // goes back to catalog view already with the new game
  		});
	}
}

