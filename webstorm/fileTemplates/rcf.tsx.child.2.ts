import Immutable from '@core-ui/immutable';
import reducer from '@core-ui/reducers_handlers';
import { handleActions } from 'redux-actions';
import * as actions from './actions';

export interface {
  
}

const defaultState = Immutable<>({
  
});

export default handleActions<typeof defaultState, any>(
  {},
  reducer<typeof defaultState>(actions.reducerName, defaultState)
);
