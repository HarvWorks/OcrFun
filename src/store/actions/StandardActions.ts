import {standardActionTypes} from './actionTypes';

const {STANDARD} = standardActionTypes;

const standardAction = (number: number) => ({
  type: STANDARD,
  payload: {
    number,
  },
});

export const standard = (number: number) => (dispatch: any) => {
  dispatch(standardAction(number));
};
