import { put, takeLatest, call } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios'

import {
    getBookRequest,
    getBookSuccess,
    getBookError
} from './book-slice'

function* emergencyCerviceBookWorker(action: any) {

    try {
        const { data } = yield call(axios.get, `https://strapi.cleverland.by/api/books/${action.payload.bookId}`);

        yield put(getBookSuccess(data));
    } catch {
        yield put(getBookError());
    }
}

export function* getEmergencyServiceBookWatcher() {
    yield takeLatest(getBookRequest, emergencyCerviceBookWorker);
}