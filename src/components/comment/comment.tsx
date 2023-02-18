import styles from "./comment.module.css";
import { Rating } from "../rating/rating";
import UserIcon from "./img/userIcon.png";
import { Comments } from "../../redux-saga/book/initial-state";

type Props = {
    comment: Comments
};

export const Comment: React.FC<Props> = ({ comment }) => (

    <div className={styles.commentWrapper}>

        <div className={styles.commentHeader}>
            <img className={styles.image} src={UserIcon} alt={UserIcon} />
            <div className={styles.nameCommentator}>
                <p>{comment.user.firstName.concat(" ") + comment.user.lastName}</p>

                <p>{new Date(comment.createdAt).toDateString()}</p>
            </div>

        </div>

        <Rating rating={comment.rating} />
        <p className={styles.titleText}>{comment.text}</p>
    </div>

);