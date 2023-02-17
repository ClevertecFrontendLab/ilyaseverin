import { createSlice } from '@reduxjs/toolkit';
import { initialCategoriesState, CategoriesState } from './initial-state';

export const categoriesSlice = createSlice({
    name: "categoriesReducer",
    initialState: initialCategoriesState,
    reducers: {
        /* eslint-disable no-param-reassign */
        getCategoriesRequest: (state: CategoriesState) => {
            state.isLoading = true;
            state.isError = false;
            state.categories = initialCategoriesState.categories;
        },
        getCategoriesSuccess: (state: CategoriesState, action) => {
            state.isLoading = false;
            state.isError = false;
            state.categories = action.payload;
        },
        getCategoriesError: (state: CategoriesState) => {
            state.isError = true;
        }
    }
    /* eslint-enable no-param-reassign */
})

export const { getCategoriesRequest, getCategoriesSuccess, getCategoriesError } = categoriesSlice.actions;
