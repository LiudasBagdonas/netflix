import * as types from './actionTypes';

export const onLogin = (token) => async (dispatch) => {
    dispatch({ type: types.LOGIN, payload: token });
}

export const onLogout = () => async (dispatch) => {
    dispatch({ type: types.LOGOUT, payload: null });
  }