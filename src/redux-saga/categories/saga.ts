import { format } from 'path';
import { put, takeLatest, call } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios'

import {
    getCategoriesRequest,
    getCategoriesSuccess,
    getCategoriesError
} from './categories-slice'

function* emergencyCerviceCategoriesWorker() {
    try {
        const { data } = yield call(axios.get, `https://strapi.cleverland.by/api/categories`);
        yield put(getCategoriesSuccess(data));
    } catch {
        yield put(getCategoriesError());
    }
}

export function* getEmergencyServiceCategoriesWatcher() {
    yield takeLatest(getCategoriesRequest, emergencyCerviceCategoriesWorker);
}