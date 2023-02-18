import { useState, useEffect, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Avatar from "./img/avatar.png";
import Logo from "./img/logo.svg";
import { ReactComponent as Burger } from './img/Burger.svg';
import { Menu } from "../menu/menu";
import { BurgerMenu } from "../burger/burger";


export const Header: React.FC = () => (
    <header className={styles.wrapper} >
        <section className={styles.headerContent}>
            <Link className={styles.left} to='/'>
                <img src={Logo} alt="logo" />
            </Link>
            <div className={styles.middle}>


                <BurgerMenu />


                <span>Библиотека</span>
            </div>
            <div className={styles.right}>
                <p>Привет, Иван!</p>
                <img src={Avatar} alt="avatar" />
            </div>
        </section>
    </header>
)
