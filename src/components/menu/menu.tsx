import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
    const books = useSelector(booksSelector)
    console.log(categories.categories.map(categories => categories.name))
    const { burger, setBurger } = useContext(BurgerContext)

    const [toggle, setToggle] = useState<boolean>(true)
    const location = useLocation()
    const category = location.pathname.split('/')[2]
    const menuPath = location.pathname.split('/')[1]
    const navigate = useCallback((id: string) => {
        const route = `/books/${id}`;

        to(route);

    }, [to])
    console.log((books.books).map(categories => categories.categories))

    return <div className={styles.wrapper} >
        <ul className={styles.fontStyleBold}>

            <li role="presentation" onClick={() => setToggle(v => !v)} className={menuPath === 'books' ? styles.fontStyleColor : styles.fontStyleBold}>
                <div data-test-id={dataIdShowcase} role="presentation" className={styles.inline} onClick={() => {
                    if (menuPath !== 'books') {
                        navigate('all')
                    }
                }}> Витрина книг
                    {menuPath === 'books' && <div className={!toggle ? styles.ArrowDown : styles.ArrowUp} />}
                </div>

            </li>

            {menuPath === 'books' && <hr className={styles.hr} />}
            <li className={styles.marginMid} style={{ display: (menuPath === 'books' && toggle) ? '' : 'none' }}>
                <ul className={styles.fontStyleCategories}>
                    <li data-test-id={dataBooks} className={category === "all" ? styles.fontStyleColor : styles.fontStyleCategories} ><Link to='/books/all' >Все книги</Link></li>
                    <li className={styles.marginHard}>
                        <ul>
                            {categories.categories.map((categories, idx) => <li role="presentation" className={categories.path === category ? styles.fontStyleColor : styles.fontStyleCategories} tabIndex={idx + 1} onKeyDown={() => navigate(categories.name)} onKeyUp={() => { }} onClick={() => navigate(categories.path)} key={categories.id} >{categories.name} <span className={styles.quantitiesFontStyle}>{books.books.filter((book: any) => book.categories.includes(categories.name)).length}</span></li>)}
                        </ul>
                    </li>
                </ul>
            </li>

            <li data-test-id={dataTerms} className={menuPath === "terms" ? styles.fontStyleColor : styles.fontStyleBold}><Link to='/terms'>Правила пользования</Link></li>
            {menuPath === "terms" && <hr className={styles.hr} />}
            <li data-test-id={dataContract} className={menuPath === "contract" ? styles.fontStyleColor : styles.fontStyleBold}><Link to='/contract'>Договор аферты</Link></li>
            {menuPath === "contract" && <hr className={styles.hr} />}
        </ul >
    </div>
};