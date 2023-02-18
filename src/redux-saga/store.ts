import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './root-saga';
import { booksSlice } from './books/books-slice';
import { categoriesSlice } from './categories/categories-slice';
import { bookSlice } from './book/book-slice';



const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        books: booksSlice.reducer,
        categories: categoriesSlice.reducer,
        book: bookSlice.reducer,
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);