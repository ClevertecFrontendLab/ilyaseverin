import { Link, useParams } from 'react-router-dom';
import styles from './itemCardList.module.css';
import AltImage from './img/altImage.png';
import { Rating } from '../rating/rating';
import { Books } from '../../redux-saga/books/initial-state';
import { host } from '../global-veriables';

type Props = {
  item: Books;
  find: string;
};

export const ItemCardList: React.FC<Props> = ({ item, find }) => {
  const { category } = useParams();
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
    <Link data-test-id='card' className={styles.wrapper} to={`/books/${category}/${item.id}`}>
      <div className={styles.card}>
        <img className={styles.image} src={item.image === null ? AltImage : host + item.image.url} alt='' />
        <div className={styles.rightWrapper}>
          <div className={styles.topWrapper}>
            <p className={styles.titleStyle}>{colored}</p>
            <p className={styles.autorNameStyle}>{item.authors}</p>
          </div>

          <div className={styles.bottomWrapper}>
            <p className={styles.stars}>
              <Rating rating={item.rating} />
            </p>
            <button className={styles.button} type='button'>
              Забронировать
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
