import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slider } from '../../components/slider/slider';
import { BurgerContext } from '../../context/burger-provider';

import { getBookRequest } from '../../redux-saga/book/book-slice';
import styles from "./book-page.module.css";

import { Comment } from "../../components/comment/comment";
import { Rating } from "../../components/rating/rating";
import data from "../../books.json"
import menu from "../../menu.json"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { bookSelector, categoriesSelector } from '../../redux-saga/selectors';
import { Loader } from '../../components/loader/loader';
import { Error } from '../../components/error/error';
import { Categories } from '../../redux-saga/categories/initial-state';





export const BookPage: React.FC = () => {
    const book = useSelector(bookSelector)
    const categories = useSelector(categoriesSelector)
    const [toggle, setToggle] = useState(false)
    const { burger, setBurger } = useContext(BurgerContext)
    const location = useLocation()
    const { bookId } = useParams();
    const { category } = useParams();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBookRequest({ bookId }))

    }, [dispatch, bookId])


    return <div role="presentation" onClick={() => setBurger(false)} style={burger ? { zIndex: 1 } : { zIndex: 0 }}>

        <div className={styles.wrapper}>
            <nav className={styles.headerText}> <NavLink to={`/books/${category}`}>{category}</NavLink>  /{book.book.title} </nav>
        </div>
        <div className={styles.filling}>
            {book.isLoading === false &&
                <div className={styles.bookWrapper}>
                    <div className={styles.bookContentWrapper}>
                        <div className={styles.bookTopWrapper}>
                            <Slider item={book.book} />

                            <div className={styles.rightTop}>
                                <div className={styles.titleText}>{book.book.title}</div>
                                <div className={styles.autorText}>{book.book.authors}</div>
                                <button className={styles.button} type="button">Забронировать</button>
                            </div>
                            <div className={styles.rightBottom}>
                                <div className={styles.boldText}>О Книге<hr className={styles.hr} /></div>
                                <div className={styles.description}>{book.book.description}</div>
                            </div>

                        </div>
                        <div className={styles.boldText}>Рейтинг<hr className={styles.hr} /></div>
                        <div className={styles.ratingWrapper}>
                            <Rating rating={book.book.rating} />
                            <div className={styles.rating}>{!book.book.rating ? "0" : book.book.rating}</div>
                        </div>
                        <div className={styles.boldText}>Подробная информация<hr className={styles.hr} /></div>
                        <div className={styles.table}>
                            <table className={styles.table1Text}>

                                <tr>
                                    <td>Издательство</td>
                                    <td>{book.book.publish}</td>
                                </tr>
                                <tr>
                                    <td>Год издания</td>
                                    <td>{book.book.issueYear}</td>
                                </tr>
                                <tr>
                                    <td>Страниц</td>
                                    <td>{book.book.pages}</td>
                                </tr>
                                <tr>
                                    <td>Переалет</td>
                                    <td>{book.book.cover}</td>
                                </tr>
                                <tr>
                                    <td>Формат</td>
                                    <td>{book.book.format}</td>
                                </tr>
                            </table>
                            <table className={styles.table2Text}>


                                <tr>
                                    <td>Жанр</td>
                                    <td>{book.book.categories}</td>
                                </tr>
                                <tr>
                                    <td>Вес</td>
                                    <td>{book.book.weight}</td>
                                </tr>
                                <tr>
                                    <td>ISBN</td>
                                    <td>{book.book.ISBN}</td>
                                </tr>
                                <tr>
                                    <td>Возрастные ограничения</td>
                                    <td>16+</td>
                                </tr>
                                <tr>
                                    <td>Изготовитель</td>
                                    <td>{book.book.producer}</td>
                                </tr>
                            </table>
                        </div>

                        <div role="presentation" onClick={() => setToggle(v => !v)} className={styles.boldText}>

                            <div data-test-id='button-hide-reviews' className={styles.inline}> Отзывы
                                <span className={styles.reviewsNumber}>{!book.book.comments ? "0" : book.book.comments?.length}</span>
                                <div className={!toggle ? styles.ArrowDown : styles.ArrowUp} />

                            </div>
                            <hr className={styles.hr} />
                        </div>

                        <div className={toggle ? '' : styles.none}>
                            {book.book.comments?.map(comment => <Comment comment={comment} />)}

                        </div>
                        <button data-test-id='button-rating' className={styles.gradeButton} type="button">Оценить книгу</button>
                    </div>
                </div>}
        </div>
    </div >
};