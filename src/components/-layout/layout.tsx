import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import { BurgerContext } from '../../context/burger-provider';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import styles from './layout.module.css';
import { Error } from '../error/error';

import { bookSelector, booksSelector, categoriesSelector } from '../../redux-saga/selectors';
import { Loader } from '../loader/loader';
import { getCategoriesRequest } from '../../redux-saga/categories/categories-slice';
import { getBooksRequest } from '../../redux-saga/books/books-slice';

export const Layout: React.FC = () => {
  const categories = useSelector(categoriesSelector);
  const books = useSelector(booksSelector);
  const book = useSelector(bookSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, [dispatch]);

  return (
    <div className={styles.layout}>
      {(books.isLoading || categories.isLoading || book.isLoading) &&
        !(books.isError || book.isError || categories.isError) && <Loader />}
      {((books.isError && categories.isError) || book.isError) && <Error />}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
