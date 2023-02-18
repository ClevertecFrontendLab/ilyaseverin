import { createSlice } from '@reduxjs/toolkit';
import { initialBooksState, BookState } from './initial-state';

export const bookSlice = createSlice({
    name: "booksReducer",
    initialState: initialBooksState,
    reducers: {
        /* eslint-disable no-param-reassign */
        getBookRequest: (state: BookState, action) => {
            state.isLoading = true;
            state.isError = false;
            state.book = initialBooksState.book;
        },
        getBookSuccess: (state: BookState, action) => {
            state.isLoading = false;
            state.isError = false;
            state.book = action.payload;
        },
        getBookError: (state: BookState) => {
            state.isError = true;
        }
    }
    /* eslint-enable no-param-reassign */
})

export const { getBookRequest, getBookSuccess, getBookError } = bookSlice.actions;