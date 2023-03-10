import styles from "./rating.module.css";
import Star1 from "./img/Star1.svg";
import Star2 from "./img/Star2.svg";

type RatingProps = {
    rating: number | null;
};
const RATING_VALUE = 5;
export const Rating: React.FC<RatingProps> = ({ rating }) => {
    const star2 = RATING_VALUE - Math.ceil(rating!);
    return <div className={styles.wrapper}>
        {Array.from({ length: Math.ceil(rating!) }).map(() => <img src={Star1} alt={Star1} />)}
        {Array.from({ length: star2 }).map(() => <img src={Star2} alt={Star2} />)}

    </div>;
}