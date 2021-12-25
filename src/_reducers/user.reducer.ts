/* eslint-disable @typescript-eslint/no-unsafe-assignment, no-case-declarations, @typescript-eslint/default-param-last */
import { ERROR_DATA, SET_USER_DATA } from '../_constants';

const initialState = {
  user: {
    login: '',
    password: '',
    fio: '',
  },
  error: '',
};

export function userReducer(state = initialState, action: { type: any; payload: any }) {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, user: action.payload };
    case ERROR_DATA:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
