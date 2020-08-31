import {standardActionTypes} from '../actions/actionTypes';

import {IAction, IReducers} from '../../commonTypes';

const {STANDARD} = standardActionTypes;

export interface IStandardReducer {
  standardValue: Number;
}

export const initialState = {
  standardValue: 0,
} as IStandardReducer;

function standard(state: IStandardReducer, action: IAction) {
  const {standardValue} = state;
  const {addValue} = action.payload;

  const nextState: IStandardReducer = {
    ...state,
    standardValue: standardValue + addValue,
  };
  return nextState;
}

function getReducer(
  type: string,
): (state: IStandardReducer, action: IAction) => any {
  const reducers: IReducers<IStandardReducer> = {
    [STANDARD]: standard,
  };
  return reducers[type];
}

const UserReducer = (
  state: IStandardReducer = initialState,
  action: {type: string; payload: any},
) => {
  const reducer = getReducer(action.type);

  return reducer ? reducer(state, action) : state;
};

export default UserReducer;
