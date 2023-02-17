
export interface Booking {
    id: string;
    order: boolean;
    dateOrder: string;
    customerId: string;
    customerFirstName: string;
    customerLastName: string
}

export interface Delivery {
    id: string;
    handed: boolean;
    dateHandedFrom: string;
    dateHandedT: string;
    recipientId: string;
    recipientFirstName: string
    customerLastName: string
}

export interface Histories {
    id: string;
    userId: string
}
export interface Url {
    url: string
}

export interface Books {

    issueYear: string;
    rating: number;
    title: string;
    authors: string[];
    image: Url
    categories: string[];
    id: string;
    booking: Booking[]
    delivery: Delivery[]

    histories: Histories[]
}


export interface BooksState {
    isLoading: boolean;
    isError: boolean;
    books: Books[]
}

export const initialBooksState: BooksState = {
    isLoading: false,
    isError: false,
    books: []
};