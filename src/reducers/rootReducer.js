import { combineReducers } from 'redux';
import layerReducer from './layerReducer';

const reducers = combineReducers({
    layer: layerReducer
});

export default reducers;
