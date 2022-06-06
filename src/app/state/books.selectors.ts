import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Book } from "../book-list/books.model";

export const selectBooks = createFeatureSelector<readonly Book[]>("books");

export const selectCollectionState =
  createFeatureSelector<readonly string[]>("collection");

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    console.log("selectBookCollection", books, collection);
    return collection.map((id) => books.find((book) => book.id === id));
  }
);
