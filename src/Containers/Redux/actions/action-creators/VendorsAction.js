import { toast } from 'react-toastify';
import Axios from '../../../../Axios/Axios';
import { config } from '../../../../Utils/config';
import * as ActionTypes from '../action-types/ActionTypes';

// Get All Vendors
export const getAllVendors = (token) => async (dispatch) => {
  try {
    const response = await Axios({
      method: 'GET',
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: ActionTypes.GET_VENDORS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
// Get All Shoppers
export const getAllShoppers = () => async (dispatch) => {
  try {
    const response = await Axios.get('/admin/shoppers');
    dispatch({
      type: ActionTypes.GET_SHOPPERS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
