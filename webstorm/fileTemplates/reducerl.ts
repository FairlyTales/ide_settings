import Immutable from '@core-ui/immutable';
import reducer from '@core-ui/reducers_handlers';
import { Nullable, SORT_ORDER_ENUM } from '@core-ui/types';
import { handleActions } from 'redux-actions';
import * as actions from './actions';

export interface #[[$ReducerInterface$]]# extends List<> {
  orderBy: Nullable<>;
  order: SORT_ORDER_ENUM;
  paginationPage: number;
}

const defaultState = Immutable<>({
  loaded: false,
  hasData: false,
  loading: false,
  chunkLoading: false,
  isAllDataReceived: false,
  orderBy: ,
  order: SORT_ORDER_ENUM.DESC,
  paginationPage: 0,
});

export default handleActions<typeof defaultState, any>(
  {},
  reducer<typeof defaultState>(actions.reducerName, defaultState)
);
