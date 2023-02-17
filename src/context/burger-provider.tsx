import { useState, createContext, Dispatch, SetStateAction, useMemo } from 'react';

type BurgerContextT = {
    burger: boolean
    setBurger: Dispatch<SetStateAction<boolean>>
}

type BurgerProps = {
    children: React.ReactElement<any, any>
}

export const BurgerContext = createContext<BurgerContextT>({ burger: false, setBurger: () => { } })

export const BurgerProvider: React.FC<BurgerProps> = ({ children }) => {
    const [burger, setBurger] = useState<boolean>(false);

    return useMemo(() => <BurgerContext.Provider value={{ burger, setBurger }}>{children}</BurgerContext.Provider>, [burger, children])
}