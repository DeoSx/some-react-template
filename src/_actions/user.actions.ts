import axios from 'axios';

// types
import { IDispatch } from './types';

// constants
import { ERROR_DATA, SET_USER_DATA } from '../_constants';

const { REACT_APP_API_URL: apiUrl } = process.env;

export const setSignInActionData =
  (data: { login: string; password: string; fio?: string }) => async (dispatch: IDispatch) => {
    await axios
      .get(`${apiUrl}/auth/login`, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        params: {
          ...data,
        },
      })
      .then((result) => {
        if (result.data.error) {
          dispatch({
            type: ERROR_DATA,
            payload: '',
          });
          throw result.data.error;
        }
        localStorage.setItem('login', data.login);
        dispatch({
          type: SET_USER_DATA,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR_DATA,
          payload: error.message || error,
        });
      });
  };

export const setSignUpActionData =
  (data: { login: string; password: string; fio?: string }) => async (dispatch: IDispatch) => {
    await axios
      .get(`${apiUrl}/auth/new-user`, {
        params: {
          ...data,
        },
      })
      .then((result) => {
        if (result.data.error) {
          dispatch({
            type: ERROR_DATA,
            payload: '',
          });
          throw result.data.error;
        }
        setSignInActionData(data);
        dispatch({
          type: SET_USER_DATA,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR_DATA,
          payload: error.message || error,
        });
      });
  };
