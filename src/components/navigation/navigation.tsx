import { useState } from 'react';
import styles from './navigation.module.css';
import Action from './img/Icon_Action.svg';

import { ReactComponent as ActionBurger } from './img/Icon_Action_burger.svg';
import { ReactComponent as SquareWhite } from './img/icon-square-four.svg';
import { ReactComponent as SquareGray } from './img/square_gray.svg';
import { ReactComponent as Closr } from './img/close.svg';


type NavigationProps = {
    filter: boolean
    changeFilter: () => void
}



export const Navigation: React.FC<NavigationProps> = ({ filter, changeFilter }) => {
    const [searchActiv, setSearchActiv] = useState(false)
    return <div className={styles.wrapper}>

        <div className={styles.left}>
            <div data-test-id='input-search' className={searchActiv ? styles.searchWrapper : ''}>
                <input placeholder="Поиск книги или автора…" className={searchActiv ? styles.searchInputMobile : styles.searchInput} />
                <input data-test-id='button-search-close' type='submit' value="" className={searchActiv ? styles.closeInput : styles.none} onClick={() => setSearchActiv(false)} />
            </div>
            <button data-test-id='button-search-open' onClick={() => setSearchActiv(v => !v)} className={searchActiv ? styles.none : styles.SearchButton} type="button">{ }</button>

            <button className={searchActiv ? styles.none : styles.filterButtonLarge} type="button"><img src={Action} alt="" />По рейтингу</button>
            <button className={searchActiv ? styles.none : styles.filterButtonSmall} type="button"><img src={Action} alt="" />{ }</button>
        </div>

        <div className={searchActiv ? styles.none : styles.right}>
            <button data-test-id='button-menu-view-window' onClick={changeFilter} className={filter ? styles.gridButton : styles.burgerButton} type="button">
                {filter ? <SquareWhite /> : <SquareGray />}
            </button>
            <button data-test-id='button-menu-view-list' onClick={changeFilter} className={!filter ? styles.gridButton : styles.burgerButton} type="button">
                <ActionBurger fill={filter ? '#A7A7A7' : '#FFFFFF'} />
            </button>
        </div>
    </div >
};