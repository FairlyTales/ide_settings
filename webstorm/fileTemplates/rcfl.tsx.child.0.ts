import { getChunkList, getList, resetState, setChunkList, setList, setLoading } from '@core-ui/reducers_handlers';
import { SORT_ORDER_ENUM } from '@core-ui/types';
import { createAction } from 'redux-actions';

export const reducerName = '';

export const resetNameList = resetState(reducerName);

export const getNameList = getList(reducerName);
export const setNameList = setList<>(reducerName);

export const getChunkNameList = getChunkList(reducerName);
export const setChunkNameList = setChunkList<>(reducerName);

export const setOrderBy = createAction<>(`\${reducerName}.SET_ORDER_BY`);
export const setOrder = createAction<SORT_ORDER_ENUM>(`\${reducerName}.SET_ORDER`);

export const setNameListLoading = setLoading(reducerName);
export const setNameListPaginationPage = createAction<number>(`\${reducerName}.SET_PAGINATION_PAGE`);
