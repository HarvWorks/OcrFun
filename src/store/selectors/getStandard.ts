import {createSelector} from 'reselect';

import {IStandardReducer} from '../reducers/StandardReducer';
import IState from '../../../types';

const reducerName = 'StandardReducer';

const getStandardReducerSelector = (state: IState) => state[reducerName];

export const getStandardInfo = createSelector(
  [getStandardReducerSelector],
  (StandardReducer: IStandardReducer) => StandardReducer,
);

export const getStandardValue = createSelector(
  [getStandardReducerSelector],
  (StandardReducer: IStandardReducer) => StandardReducer.standardValue,
);