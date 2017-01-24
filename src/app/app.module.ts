import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { CategoryComponent } from './category/category.component';
import { CategoryTileComponent } from './category-tile/category-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    CategoryComponent,
    CategoryTileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
