import * as ActionTypes from '../actions/action-types/ActionTypes';

let initialState = {
  user: null,
  isAuthenticated: false,
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER: {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    }
    case ActionTypes.LOGOUT_USER: {
      localStorage.removeItem('admin-dashboard');
      return {
        user: null,
        isAuthenticated: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default AuthReducer;
