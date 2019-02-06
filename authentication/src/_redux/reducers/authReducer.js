import { authConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user
};

export default (state = initialState, action) => {
    switch (action.type) {
      case authConstants.LOGIN_FAILURE:
      case authConstants.LOGIN_SUCCESS:
      case authConstants.LOGOUT:
        return {
          user: action.payload
        };
      default:
        return state;
    }
  };