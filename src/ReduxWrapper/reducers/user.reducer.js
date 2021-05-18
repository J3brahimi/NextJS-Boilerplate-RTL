import { HYDRATE } from "next-redux-wrapper";
import { LOGIN, LOGOUT } from "../types/user.types";

const initialState = {
  isLoggedIn: false,
  profile: null,
  isHere: false,
  testValue: "javad",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case LOGIN:
      return {
        isLoggedIn: true,
        profile: action.payload,
      };

    case LOGOUT:
      return {
        isLoggedIn: false,
        profile: null,
      };

    default:
      return state;
  }
};
