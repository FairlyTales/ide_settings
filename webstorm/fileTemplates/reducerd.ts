import Immutable from '@core-ui/immutable';
import reducer, { Data } from '@core-ui/reducers_handlers';
import { handleActions } from 'redux-actions';
import * as actions from './actions';

export interface #[[$interfaceName$]]# extends Data<> {
  
}

const defaultState = Immutable<#[[$interfaceName$]]#>({
  loaded: false,
  hasData: false,
  loading: false,
});

export default handleActions<typeof defaultState, any>(
  {},
  reducer<typeof defaultState>(actions.reducerName, defaultState)
);
