import { createSlice } from '@reduxjs/toolkit';
import { initialBooksState, BooksState } from './initial-state';

export const booksSlice = createSlice({
    name: "booksReducer",
    initialState: initialBooksState,
    reducers: {
        /* eslint-disable no-param-reassign */
        getBooksRequest: (state: BooksState) => {
            state.isLoading = true;
            state.isError = false;
            state.books = initialBooksState.books;
        },
        getBooksSuccess: (state: BooksState, action) => {
            state.isLoading = false;
            state.isError = false;
            state.books = action.payload;
        },
        getBooksError: (state: BooksState) => {
            state.isError = true;
        }
    }
    /* eslint-enable no-param-reassign */
})

export const { getBooksRequest, getBooksSuccess, getBooksError } = booksSlice.actions;