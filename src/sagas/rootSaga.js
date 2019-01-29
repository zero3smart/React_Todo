import { all, fork } from 'redux-saga/effects';
import * as layerSaga from './layerSaga';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        fork(layerSaga.watchGetLayerAsync),
        fork(layerSaga.watchAddItemAsync),
        fork(layerSaga.watchEditItemAsync),
        fork(layerSaga.watchDeleteItemAsync)
    ]);
}