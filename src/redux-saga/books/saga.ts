import { put, takeLatest, call } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios'

import {
    getBooksRequest,
    getBooksSuccess,
    getBooksError
} from './books-slice'

function* emergencyCerviceBooksWorker() {
    try {
        const { data } = yield call(axios.get, `https://strapi.cleverland.by/api/books`);
        yield put(getBooksSuccess(data));
    } catch {
        yield put(getBooksError());
    }
}

export function* getEmergencyServiceBooksWatcher() {
    yield takeLatest(getBooksRequest, emergencyCerviceBooksWorker);
}