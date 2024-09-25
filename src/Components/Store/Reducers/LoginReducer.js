import { LOGIN, LOGOUT } from './actions/types';

const initialState = {
  isLoggedIn: false,
  userId: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payload.userId,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userId: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
