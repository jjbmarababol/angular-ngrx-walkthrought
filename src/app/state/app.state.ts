import { Book } from "../book-list/books.model";

export interface AppState {
  books: readonly Book[];
  collection: readonly string[];
}
