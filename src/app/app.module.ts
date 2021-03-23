import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { Jour1Component } from './jour1/jour1.component';
import { Jour2Component } from './jour2/jour2.component';
import { FromNowPipe } from './shared/from-now.pipe';
import { LettersPipe } from './shared/letters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    Jour1Component,
    Jour2Component,
    FromNowPipe,
    LettersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
