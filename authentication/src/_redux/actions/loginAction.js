import { authConstants } from '../constants';
import { userService } from '../../_services';

function login(auth) {
  // return user or null
  return userService.login(auth.username, auth.password);
}
export const loginAction = credentials => {
  const user = login(credentials);
  const action = {
    type: (!!user) ? authConstants.LOGIN_SUCCESS : authConstants.LOGIN_FAILURE,
    payload: user
  }
  return action;
};