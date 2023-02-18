export interface Comments {
    id: number | null,
    rating: number,
    text: string
    createdAt: string
    user: User


}

export interface User {
    commentUserId: number | null;
    firstName: string;
    lastName: string;
    avatarUrl: string;
}


export interface Url {
    url: string
}

export interface Booking {
    id: number | null;
    order: boolean;
    dateOrder: string;
    customerId: number | null;
    customerFirstName: string;
    customerLastName: string;

}


export interface Delivery {
    id: number | null;
    handed: boolean;
    dateHandedFrom: string;
    dateHandedTo: string;
    recipientId: number | null;
    recipientFirstName: string;
    recipientLastName: string;

}


export interface Histories {
    id: number,
    userId: number

}


export interface Book {
    id: number | null;
    title: string;
    rating: number | null;
    issueYear: string;
    description: string;
    publish: string;
    pages: string;
    cover: string;
    weight: string;
    format: string;
    ISBN: string;
    producer: string;
    authors: string[];
    images: Url[];
    categories: string[];
    comments: Comments[] | null;
    booking: Booking;
    delivery: Delivery;
    histories: Histories[]
}

export interface BookState {
    isLoading: boolean;
    isError: boolean;
    book: Book
}

export const initialBooksState: BookState = {
    isLoading: false,
    isError: false,
    book: {
        id: null,
        title: '',
        rating: null,
        issueYear: '',
        description: '',
        publish: '',
        pages: '',
        cover: '',
        weight: '',
        format: '',
        ISBN: '',
        producer: '',
        authors: [],
        images: [],
        categories: [],
        comments: [],
        booking: {
            id: null,
            order: false,
            dateOrder: '',
            customerId: null,
            customerFirstName: '',
            customerLastName: ''
        },
        delivery: {
            id: null,
            handed: false,
            dateHandedFrom: '',
            dateHandedTo: '',
            recipientId: null,
            recipientFirstName: '',
            recipientLastName: '',
        },
        histories: []
    }
};