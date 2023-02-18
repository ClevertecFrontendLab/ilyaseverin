import { useCallback, useContext, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BurgerContext } from "../../context/burger-provider";
import styles from "./menu.module.css";
import { booksSelector, categoriesSelector } from "../../redux-saga/selectors";

type Props = {
    dataIdShowcase: string
    dataBooks: string
    dataTerms: string
    dataContract: string
}

export const Menu: React.FC<Props> = ({ dataIdShowcase, dataBooks, dataTerms, dataContract }) => {
    const to = useNavigate();


    const categories = useSelector(categoriesSelector)
    const allBooks = useSelector(booksSelector)

    const { burger, setBurger } = useContext(BurgerContext)

    const [toggle, setToggle] = useState<boolean>(true)
    const { category } = useParams()
    const { books } = useParams()

    const navigate = useCallback((id: string) => {
        const route = `/books/${id}`;

        to(route);

    }, [to])

    return <div className={styles.wrapper} >
        <ul className={styles.fontStyleBold}>

            <li role="presentation" onClick={() => setToggle(v => !v)} className={books === 'books' ? styles.fontStyleColor : styles.fontStyleBold}>
                <div data-test-id={dataIdShowcase} role="presentation" className={styles.inline} onClick={() => {
                    if (books !== 'books') {
                        navigate('all')
                    }
                }}> Витрина книг
                    {books === 'books' && <div className={!toggle ? styles.ArrowDown : styles.ArrowUp} />}
                </div>

            </li>

            {books === 'books' && <hr className={styles.hr} />}
            <li className={styles.marginMid} style={{ display: (books === 'books' && toggle) ? '' : 'none' }}>
                <ul className={styles.fontStyleCategories}>
                    {!categories.isLoading && <li data-test-id={dataBooks} className={category === "all" ? styles.fontStyleColor : styles.fontStyleCategories} ><Link to='/books/all' >Все книги</Link></li>}
                    <li className={styles.marginHard}>
                        <ul>
                            {categories.categories.map((categories, idx) => <li role="presentation" className={categories.name === category ? styles.fontStyleColor : styles.fontStyleCategories} tabIndex={idx + 1} onKeyDown={() => navigate(categories.name)} onClick={() => navigate(categories.name)} key={categories.id} >{categories.name} <span className={styles.quantitiesFontStyle}>{allBooks.books.filter((book: any) => book.categories.includes(categories.name)).length}</span></li>)}
                        </ul>
                    </li>
                </ul>
            </li>

            <li data-test-id={dataTerms} className={books === "terms" ? styles.fontStyleColor : styles.fontStyleBold}><Link to='/terms'>Правила пользования</Link></li>
            {books === "terms" && <hr className={styles.hr} />}
            <li data-test-id={dataContract} className={books === "contract" ? styles.fontStyleColor : styles.fontStyleBold}><Link to='/contract'>Договор аферты</Link></li>
            {books === "contract" && <hr className={styles.hr} />}
        </ul >
    </div>
};