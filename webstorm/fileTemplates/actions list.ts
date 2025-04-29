import { getChunkList, getList, resetState, setChunkList, setList, setLoading } from '@core-ui/reducers_handlers';
import { SORT_ORDER_ENUM } from '@core-ui/types';
import { createAction } from 'redux-actions';

export const reducerName = '#[[$Reducer_name$]]#';

export const reset#[[$Action_name$]]#List = resetState(reducerName);

export const get#[[$Action_name$]]#List = getList(reducerName);
export const set#[[$Action_name$]]#List = setList<#[[$Set_action_interface$]]#>(reducerName);

export const getChunk#[[$Action_name$]]#List = getChunkList(reducerName);
export const setChunk#[[$Action_name$]]#List = setChunkList<>(reducerName);

export const setOrderBy = createAction<>(`\${reducerName}.SET_ORDER_BY`);
export const setOrder = createAction<SORT_ORDER_ENUM>(`\${reducerName}.SET_ORDER`);

export const set#[[$Action_name$]]#ListLoading = setLoading(reducerName);
export const set#[[$Action_name$]]#ListPaginationPage = createAction<number>(`\${reducerName}.SET_PAGINATION_PAGE`);
