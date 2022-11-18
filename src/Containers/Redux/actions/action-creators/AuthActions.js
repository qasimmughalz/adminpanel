import Axios from '../../../../Axios/Axios';
import * as ActionTypes from '../action-types/ActionTypes';

// Login User
export const loginUser = (formData, navigate) => async (dispatch) => {
  try {
    let response = await Axios.post('/login', formData);
    dispatch({
      type: ActionTypes.LOGIN_USER,
      payload: response.data,
    });
    navigate('/dashboard');
  } catch (error) {
    console.log(error);
  }
};

// Logout User
export const logoutUser = () => (dispatch) => {
  dispatch({
    type: ActionTypes.LOGOUT_USER,
  });
};
