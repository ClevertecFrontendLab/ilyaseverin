import { CategoriesState } from './categories/initial-state';
import { BooksState } from './books/initial-state';
import { BookState } from './book/initial-state';


export const categoriesSelector = (state: { categories: CategoriesState }) => (
    state.categories
);


export const booksSelector = (state: { books: BooksState }) => (
    state.books
);

export const bookSelector = (state: { book: BookState }) => (
    state.book
);