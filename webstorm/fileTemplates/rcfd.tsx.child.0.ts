import { getChunkList, getList, resetState, setChunkList, setList, setLoading } from '@core-ui/reducers_handlers';
import { SORT_ORDER_ENUM } from '@core-ui/types';
import { createAction } from 'redux-actions';

export const reducerName = '';

export const resetStateName = resetState(reducerName);

export const getName = getData(reducerName);
export const setName = setData<>(reducerName);

export const setNameLoading = setLoading(reducerName);
