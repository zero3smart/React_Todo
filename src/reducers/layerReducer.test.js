import layerReducer from './layerReducer';
import {
    GET_LAYER_SUCCEEDED,
    ADD_ITEM_SUCCEEDED,
    EDIT_ITEM_SUCCEEDED,
    EDIT_ITEM,
    DELETE_ITEM_SUCCEEDED
} from '../constants';

describe('layer reducer', () => {
    it('should return the initial state', () => {
        expect(layerReducer(undefined, {})).toEqual({
            layers: [],
            errors: {}
        });
    });

    it('should handle GET_LAYER_SUCCEEDED', () => {
        expect(layerReducer(undefined, {
            type: GET_LAYER_SUCCEEDED,
            payload: [
                {
                    "layer": "01 Layer",
                    "ft": "112, 0 ft."
                }
            ]
        })).toEqual({
            layers: [
                {
                    "layer": "01 Layer",
                    "ft": "112, 0 ft."
                }
            ],
            errors: {}
        });
    });
});