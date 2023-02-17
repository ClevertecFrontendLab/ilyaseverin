import { useOutletContext, useLocation, useNavigate, NavLink } from "react-router-dom";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./card-component.module.css";
import data from "../../books.json"
import { ItemCard } from "../item-card/card";
import { ItemCardList } from "../item-card/item-card-list-element";
import { Navigation } from "../navigation/navigation";

import { booksSelector, categoriesSelector } from "../../redux-saga/selectors";
import { Books } from "../../redux-saga/books/initial-state";

export const CardComponent: React.FC = () => {
    const location = useLocation()
    const category = location.pathname.split('/')[2]
    const [filter, setFilter] = useState<boolean>(true)
    const books = useSelector(booksSelector)
    const categories = useSelector(categoriesSelector)
    const categoryPath = categories.categories.find(categories => categories.path === category)


    const to = useNavigate();
    const navigate = useCallback((id: string) => {
        const route = `/books/${id}`;
        to(route);
    }, [to])

    const changeFilter = (): void => setFilter(value => !value);

    const dataWithoutFilter: any[] = []
    Object.keys(books.books).forEach((item) => dataWithoutFilter.push(((books.books as any)[item])))

    const result = category === 'all' ? dataWithoutFilter.flat() : books.books.filter((book: any) => book.categories.includes(categoryPath?.name));

    return <div>
        <Navigation filter={filter} changeFilter={changeFilter} />

        <div className={styles.boooksContentWrapper}>
            {result.map((item: any) => filter ? (
                <ItemCard
                    key={item.id} item={item} />
            ) : <ItemCardList key={item.id} item={item} />)}
        </div>
    </div>
};

