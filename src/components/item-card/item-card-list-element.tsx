import { Link } from "react-router-dom";
import styles from "./itemCardList.module.css";
import CardImage from "./img/image.png";
import AltImage from "./img/altImage.png";
import { Rating } from "../rating/rating";
import { Books } from "../../redux-saga/books/initial-state";


const host = 'https://strapi.cleverland.by'

export const ItemCardList: React.FC<{ item: Books }> = ({ item }) => (
    <Link data-test-id='card' className={styles.wrapper} to={`/books/${item.categories}/${item.id}`}>


        <div className={styles.card}>

            <img className={styles.image} src={item.image === null ? AltImage : host + item.image.url} alt="" />
            <div className={styles.rightWrapper}>
                <div className={styles.topWrapper}>
                    <p className={styles.titleStyle}>{item.title}</p>
                    <p className={styles.autorNameStyle}>{item.authors}</p>
                </div>

                <div className={styles.bottomWrapper}>
                    <p className={styles.stars}><Rating rating={item.rating} /></p>
                    <button className={styles.button} type="button">Забронировать</button>
                </div>
            </div>

        </div></Link>
);