import { LOGIN, LOGOUT, SET_ERROR, CLEAR_ERROR } from './types';

export const login = (userData) => (dispatch) => {
  // For simplicity, assume login is successful with any non-empty userId
  if (userData.userId.trim() !== '') {
    dispatch({ type: LOGIN, payload: { userId: userData.userId } });
  } else {
    dispatch({ type: SET_ERROR, payload: 'Invalid credentials' });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const clearError = () => (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
