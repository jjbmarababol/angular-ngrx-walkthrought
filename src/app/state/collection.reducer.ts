import { createReducer, on } from "@ngrx/store";
import { addBook, removeBook } from "./books.actions";

export const initialState: readonly string[] = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
  on(addBook, (state, { bookId }) => {
    console.log("collectionReducer:", "state: ", state, "bookId: ", bookId);
    if (state.includes(bookId)) return state;

    return [...state, bookId];
  })
);
