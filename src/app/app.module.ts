import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { GameFormComponent } from './game-form/game-form.component';

import { GameService }          from './game.service';

// browser animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// forms support
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';

// module that has all material components
import { AppMaterialModule } from './app-material/app-material.module';

// module to support localStorage usage on Angular
import { StorageServiceModule} from 'angular-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    GameFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    StorageServiceModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    GameService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }