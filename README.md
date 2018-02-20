# Game Library

A web app using [Angular CLI](https://github.com/angular/angular-cli) 1.7.0 (angular/cdk 5.2.1) and [Angular Material](https://material.angular.io/) 5.2.1.

Its goal is to make a catalog to keep track of the videogames I (supposedly) own. 

The main (catalog) page shows a list of videogames, including data as year of release, title, date of completion (if completed) and personal notes. The add game page allow users to add new videogames.

## Data storage

There is no back-end for this application. A fake REST API was created using JSON Server(https://github.com/typicode/json-server), which needs to be installed and started to run this web application.

## Run the fake REST API

To install JSON Server using npm
`npm install -g json-server`

Then create/run a db.json file
`json-server db.json`

This server needs to be running every time the Angular application is running

Other instructions are available at [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

## Run the Angular application

Run `ng serve` on the root folder of the application
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
