import { getChunkList, getList, resetState, setChunkList, setList, setLoading } from '@core-ui/reducers_handlers';
import { SORT_ORDER_ENUM } from '@core-ui/types';
import { createAction } from 'redux-actions';

export const reducerName = '#[[$Reducer_name$]]#';

export const reset#[[$Action_name$]]# = resetState(reducerName);

export const get#[[$Action_name$]]# = getData(reducerName);
export const set#[[$Action_name$]]# = setData<#[[$Set_action_interface$]]#>(reducerName);

export const set#[[$Action_name$]]#Loading = setLoading(reducerName);
