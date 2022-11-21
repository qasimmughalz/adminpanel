import * as ActionTypes from '../actions/action-types/ActionTypes';

let initialState = {
  vendors: null,
  shoppers: null,
};

const VendorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_VENDORS: {
      return {
        ...state,
        vendors: action.payload,
      };
    }
    case ActionTypes.GET_SHOPPERS: {
      return {
        ...state,
        shoppers: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default VendorsReducer;
