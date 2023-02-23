import { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import styles from './navigation.module.css';
import Action from './img/Icon_Action.svg';


import { ReactComponent as ActionBurger } from './img/Icon_Action_burger.svg';
import { ReactComponent as SquareWhite } from './img/icon-square-four.svg';
import { ReactComponent as SquareGray } from './img/square_gray.svg';



type NavigationProps = {
    filter: boolean
    changeFilter: () => void

    sort: boolean
    changeSort: () => void

    // find: boolean
    setFind: (value: string) => void
}



export const Navigation: React.FC<NavigationProps> = ({ filter, changeFilter, sort, changeSort, setFind }) => {
    const [searchActiv, setSearchActiv] = useState(false)
    const changeHandler = (event: { target: { value: string; }; }) => {
        setFind(event.target.value.toLowerCase())
    }


    return <div className={styles.wrapper}>

        <div className={styles.left}>
            <div className={searchActiv ? styles.searchWrapper : ''}>
                <DebounceInput data-test-id='input-search' debounceTimeout={300} onChange={changeHandler} placeholder="Поиск книги или автора…" className={searchActiv ? styles.searchInputMobile : styles.searchInput} />
                <input data-test-id='button-search-close' type='submit' value="" className={searchActiv ? styles.closeInput : styles.none} onClick={() => setSearchActiv(false)} />
            </div>
            <button data-test-id='button-search-open' onClick={() => setSearchActiv(v => !v)} className={searchActiv ? styles.none : styles.SearchButton} type="button">{ }</button>

            <button data-test-id='sort-rating-button' onClick={changeSort} className={searchActiv ? styles.none : styles.filterButtonSmall} type="button"><img className={sort ? styles.reflection : ''} src={Action} alt="" /><p className={styles.filterButtonLarge}>По рейтингу</p></button>
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