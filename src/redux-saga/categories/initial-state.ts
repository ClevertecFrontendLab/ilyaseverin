export interface Categories {
    name: string;
    path: string;
    id: string;
}

export interface CategoriesState {
    isLoading: boolean;
    isError: boolean;
    categories: Categories[]
}


export const initialCategoriesState: CategoriesState = {
    isLoading: false,
    isError: false,
    categories: []
};