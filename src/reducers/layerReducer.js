import { handleActions } from 'redux-actions';
import {
    GET_LAYER_SUCCEEDED,
    ADD_ITEM_SUCCEEDED,
    EDIT_ITEM_SUCCEEDED,
    EDIT_ITEM,
    DELETE_ITEM_SUCCEEDED
} from '../constants';

const initialState = {
    layers: [],
    errors: {}
};

const layerReducer = handleActions(
    {
        [GET_LAYER_SUCCEEDED]: (state, action) => ({
            ...state,
            layers: action.payload
        }),
        [ADD_ITEM_SUCCEEDED]: (state, action) => {
            let tmp = state.layers;
            tmp.push({
                "layer": action.payload.layerName,
                "ft": action.payload.ft
            });

            return {
                ...state,
                layers: tmp
            };
        },
        [EDIT_ITEM_SUCCEEDED]: (state, action) => {
            let tmp = state.layers;
            tmp[action.payload.index] = { "layer": action.payload.fields.layerName, "ft": action.payload.fields.ft };

            return {
                ...state,
                layers: tmp
            };
        },
        [DELETE_ITEM_SUCCEEDED]: (state, action) => {
            let tmp = state.layers;
            tmp.splice(action.payload, 1);

            return {
                ...state,
                layers: tmp
            };
        }
    },
    initialState
);

export default layerReducer;