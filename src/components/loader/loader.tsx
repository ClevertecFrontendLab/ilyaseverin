import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { BurgerContext } from '../../context/burger-provider';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import styles from './loader.module.css';

export const Loader: React.FC = () => (
  <div data-test-id='loader' className={styles.loader}>
    <div className={styles.loaderAnimation} />
  </div>
);
