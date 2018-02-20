import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importing components that will be routed
import { CatalogComponent } from './catalog/catalog.component';
import { GameFormComponent } from './game-form/game-form.component';

// routes for the app
const routes: Routes = [
  { path: '', redirectTo: '/catalog', pathMatch: 'full' }, // default route
  { path: 'catalog', component: CatalogComponent },
  { path: 'add', component: GameFormComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
