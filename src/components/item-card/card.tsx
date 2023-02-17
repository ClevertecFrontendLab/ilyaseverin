import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import styles from "./itemCard.module.css";
import styles2 from "./itemCardList.module.css"
import CardImage from "./img/image.png";
import AltImage from "./img/altImage.png";
import { Rating } from "../rating/rating";
import { useLink } from "../../hooks/use-liink";
import { Books } from "../../redux-saga/books/initial-state";

type Props = {
    item: Books;
}

export const ItemCard: React.FC<Props> = ({ item }) => {
    const to = useNavigate();
    const host = 'https://strapi.cleverland.by'
    const navigate = useCallback((id: string, category: string) => {
        const route = `/books/${category}/${id}`;
        to(route);
    }, [to])

    return <Link role="presentation" className={styles.wrapper} to={`/books/${item.categories}/${item.id}`} >
        <div data-test-id='card' className={styles.card}>
            <img className={styles.image} src={item.image === null ? AltImage : host + item.image.url} alt="" />

            <p className={styles.rating}><Rating rating={item.rating} /></p>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.autor}>{item.authors}</p>
            <button className={styles.button} type="button">Забронировать</button>
        </div>
    </Link>

};

// export const ItemCard: React.FC<{ item: any, filter: any }> = ({ item, filter }) => (


//     filter ?
//         <div className={styles.wrapper}>
//             <div className={styles.card}>
//                 <img src={AltImage} alt={AltImage} />
//                 <p><Rating rating={item.rating} /></p>
//                 <p>{item.title}</p>
//                 <p>{item.author}</p>
//                 <button className={styles.button} type="button">Забронировать</button>
//             </div>
//         </div>
//         :
//         <div className={styles2.wrapper} >
//             <div className={styles2.card}>

//                 <img src={AltImage} alt={AltImage} />
//                 <div className={styles2.rightWrapper}>
//                     <div className={styles2.topWrapper}>
//                         <p className={styles2.titleStyle}>{item.title}</p>
//                         <p className={styles2.autorNameStyle}>{item.author}</p>
//                     </div>

//                     <div className={styles2.bottomWrapper}>
//                         <p><Rating rating={item.rating} /></p>
//                         <button className={styles2.button} type="button">Забронировать</button>
//                     </div>
//                 </div>
//             </div>
//         </div>


// );