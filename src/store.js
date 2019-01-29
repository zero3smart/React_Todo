import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers/rootReducer';
import sagas from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
    routerMiddleware(history),
    sagaMiddleware
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
);

sagaMiddleware.run(sagas);

export default store;