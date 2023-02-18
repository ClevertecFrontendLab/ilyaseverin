import { useState, useEffect, MouseEventHandler, useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./burger.module.css";
import Avatar from "./img/avatar.png";
import Logo from "./img/logo.svg";
import { ReactComponent as Burger } from './img/Burger.svg';
import { Menu } from "../menu/menu";
import { BurgerContext } from "../../context/burger-provider";


export const BurgerMenu: React.FC = () => {
    const { burger, setBurger } = useContext(BurgerContext)
    const location = useLocation()
    const pathname = location.pathname as string
    const dataIdShowcase = 'burger-showcase';
    const dataBooks = 'burger-books'
    const dataTerms = 'burger-terms'
    const dataContract = 'burger-contract'
    useEffect(() => setBurger(false), [setBurger, location])

    return <>

        <div data-test-id='button-burger' className={styles.burger} role="presentation" onClick={(e) => {
            setBurger(v => !v)
            e.stopPropagation()
        }} >
            <div className={!burger ? styles.burgerButton : styles.burgerClose} >
                <span />
            </div>
        </div>


        <div data-test-id='burger-navigation' role="presentation" className={burger ? styles.burgerWrapper : styles.none}>
            <Menu dataIdShowcase={dataIdShowcase} dataBooks={dataBooks} dataTerms={dataTerms} dataContract={dataContract} />
        </div>
    </>
};
