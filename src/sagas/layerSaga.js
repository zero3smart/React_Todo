import { call, put, takeEvery } from 'redux-saga/effects';
import {
    GET_LAYER,
    GET_LAYER_SUCCEEDED,
    GET_LAYER_FAILED,
    ADD_ITEM,
    ADD_ITEM_SUCCEEDED,
    ADD_ITEM_FAILED,
    EDIT_ITEM,
    EDIT_ITEM_SUCCEEDED,
    EDIT_ITEM_FAILED,
    DELETE_ITEM,
    DELETE_ITEM_SUCCEEDED,
    DELETE_ITEM_FAILED
} from '../constants';
import LayerService from '../api/LayerService';

function* getLayerAsync(action) {
    try {
        const layers = yield call(LayerService.fetchLayer);
        yield put({ type: GET_LAYER_SUCCEEDED, payload: layers.data });
    } catch (e) {
        yield put({ type: GET_LAYER_FAILED, message: e.message });
    }
}

function* addItemAsync(action) {
    try {
        yield put({ type: ADD_ITEM_SUCCEEDED, payload: action.payload });
    } catch (e) {
        yield put({ type: ADD_ITEM_FAILED, message: e.message });
    }
}

function* editItemAsync(action) {
    try {
        yield put({ type: EDIT_ITEM_SUCCEEDED, payload: action.payload });
    } catch (e) {
        yield put({ type: EDIT_ITEM_FAILED, message: e.message });
    }
}

function* deleteItemAsync(action) {
    try {
        yield put({ type: DELETE_ITEM_SUCCEEDED, payload: action.payload });
    } catch (e) {
        yield put({ type: DELETE_ITEM_FAILED, message: e.message });
    }
}

export function* watchGetLayerAsync() {
    yield takeEvery(GET_LAYER, getLayerAsync);
}

export function* watchAddItemAsync() {
    yield takeEvery(ADD_ITEM, addItemAsync);
}

export function* watchEditItemAsync() {
    yield takeEvery(EDIT_ITEM, editItemAsync);
}

export function* watchDeleteItemAsync() {
    yield takeEvery(DELETE_ITEM, deleteItemAsync);
}