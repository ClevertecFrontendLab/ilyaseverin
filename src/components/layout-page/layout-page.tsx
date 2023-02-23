import { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesRequest } from '../../redux-saga/categories/categories-slice';
import { getBooksRequest } from '../../redux-saga/books/books-slice';

import { Menu } from '../menu/menu';
import { BurgerContext, BurgerProvider } from '../../context/burger-provider';
import styles from './layout-page.module.css';
import { booksSelector, categoriesSelector } from '../../redux-saga/selectors';
import { Loader } from '../loader/loader';
import { Error } from '../error/error';

export const LayoutPage: React.FC = () => {
  const { burger, setBurger } = useContext(BurgerContext);
  const dataIdShowcase = 'navigation-showcase';
  const dataBooks = 'navigation';
  const dataTerms = 'navigation-terms';
  const dataContract = 'navigation-contract';

  const dispatch = useDispatch();

  const categories = useSelector(categoriesSelector);
  const books = useSelector(booksSelector);

  return (
    <div className={styles.wrapper}>
      <div
        role='presentation'
        className={styles.noneClickable}
        onClick={() => setBurger(false)}
        style={burger ? { zIndex: 1 } : { zIndex: -1 }}
      />
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <Menu
            dataIdShowcase={dataIdShowcase}
            dataBooks={dataBooks}
            dataTerms={dataTerms}
            dataContract={dataContract}
          />
        </aside>
        <div className={styles.navigationWrapper}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
