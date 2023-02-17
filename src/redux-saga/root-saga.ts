import { all } from 'redux-saga/effects';
import { getEmergencyServiceCategoriesWatcher } from './categories/saga';
import { getEmergencyServiceBooksWatcher } from './books/saga';
import { getEmergencyServiceBookWatcher } from './book/saga';



export function* rootSaga() {
    yield all([
        getEmergencyServiceCategoriesWatcher(),
        getEmergencyServiceBooksWatcher(),
        getEmergencyServiceBookWatcher()
    ]);
}