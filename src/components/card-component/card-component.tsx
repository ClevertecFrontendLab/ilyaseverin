import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './card-component.module.css';
import { ItemCard } from '../item-card/card';
import { ItemCardList } from '../item-card/item-card-list-element';
import { Navigation } from '../navigation/navigation';
import { booksSelector, categoriesSelector } from '../../redux-saga/selectors';
import { Books } from '../../redux-saga/books/initial-state';
import { Book } from '../../redux-saga/book/initial-state';
import { getBooksRequest } from '../../redux-saga/books/books-slice';

export const CardComponent: React.FC = () => {
  const { category } = useParams();
  const [filter, setFilter] = useState<boolean>(true);
  const [sort, setSort] = useState<boolean>(false);
  const [find, setFind] = useState<string>('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksRequest());
  }, [dispatch]);

  const books = useSelector(booksSelector);
  const categories = useSelector(categoriesSelector);
  const categoryPath = categories.categories.find((categories) => categories.path === category);

  const changeFilter = (): void => setFilter((value) => !value);
  const changeSort = (): void => setSort((value) => !value);
  const dataWithoutFilter: Books[] = [];
  Object.keys(books.books).forEach((item) => dataWithoutFilter.push((books.books as any)[item]));

  const result =
    category === 'all'
      ? dataWithoutFilter.flat()
      : books.books.filter((book: any) => book.categories.includes(categoryPath?.name));

  const sorted = sort ? result.sort((x, y) => x.rating - y.rating) : result.sort((x, y) => y.rating - x.rating);
  const filtered = sorted.filter((book) => book.title.toLowerCase().includes(find.toLowerCase()));

  return (
    <div>
      <Navigation filter={filter} changeFilter={changeFilter} sort={sort} changeSort={changeSort} setFind={setFind} />
      {!filtered.length && find !== '' && (
        <div data-test-id='search-result-not-found' className={styles.notFoundText}>
          По запросу ничего не найдено
        </div>
      )}
      {filtered.length === 0 && find === '' && (
        <div data-test-id='empty-category' className={styles.notFoundText}>
          В этой категории книг ещё нет
        </div>
      )}
      <div className={styles.boooksContentWrapper}>
        {filtered.map((item: any) =>
          filter ? (
            <ItemCard key={item.id} item={item} find={find} />
          ) : (
            <ItemCardList key={item.id} item={item} find={find} />
          )
        )}
      </div>
    </div>
  );
};
