import {
    GET_LAYER,
    ADD_ITEM,
    EDIT_ITEM,
    DELETE_ITEM
} from '../constants';
import { createAction } from 'redux-actions';

export const getLayerAction = createAction(GET_LAYER);
export const addItemAction = createAction(ADD_ITEM);
export const editItemAction = createAction(EDIT_ITEM);
export const deleteItemAction = createAction(DELETE_ITEM);