import { LOGIN, LOGOUT } from "../types/user.types";

const login = payload => ({
  type: LOGIN,
  payload,
});

const logout = payload => ({
  type: LOGOUT,
  payload,
});

export const loginAction = payload => dispatch => dispatch(login(payload));

export const logoutAction = payload => dispatch => dispatch(logout(payload));
