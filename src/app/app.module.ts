import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { StoreModule } from '@ngrx/store';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    HttpClientModule,
  ],
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
