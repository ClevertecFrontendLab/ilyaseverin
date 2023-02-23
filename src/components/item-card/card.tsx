import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCallback } from 'react';
import styles from './itemCard.module.css';
import AltImage from './img/altImage.png';
import { Rating } from '../rating/rating';
import { Books } from '../../redux-saga/books/initial-state';

import { host } from '../global-veriables';

type Props = {
  item: Books;
  find: string;
};

export const ItemCard: React.FC<Props> = ({ item, find }) => {
  const to = useNavigate();
  const { category } = useParams();
  const navigate = useCallback(
    (id: string, category: string) => {
      const route = `/books/${category}/${id}`;
      to(route);
    },
    [to]
  );

  const reg = item.title.split(new RegExp(`(${find})`, 'gi'));
  const colored = (
    <span>
      {reg.map((reg) =>
        reg.toLowerCase() === find.toLowerCase() ? (
          <span data-test-id='highlight-matches' style={{ color: '#FF5253' }}>
            {reg}
          </span>
        ) : (
          reg
        )
      )}
    </span>
  );

  return (
    <Link role='presentation' className={styles.wrapper} to={`/books/${category}/${item.id}`}>
      <div data-test-id='card' className={styles.card}>
        <img className={styles.image} src={item.image === null ? AltImage : host + item.image.url} alt='' />

        <div className={styles.rating}>
          <Rating rating={item.rating} />
        </div>
        <p className={styles.title}>{colored}</p>
        <p className={styles.autor}>{item.authors}</p>
        <button className={styles.button} type='button'>
          Забронировать
        </button>
      </div>
    </Link>
  );
};
