import { createContext, useReducer } from "react";

const initialState = {
  isLoggedIn: false,
  profile: null,
};

const UserContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLoggedIn: true,
        profile: action.payload,
      };
    case "LOGOUT":
      return {
        isLoggedIn: false,
        profile: null,
      };
    default:
      return state;
  }
};

function UserProvider({ children }) {
  const [user, dispatch] = useReducer(reducer, initialState);

  const login = payload =>
    dispatch({
      type: "LOGIN",
      payload,
    });

  const logout = payload =>
    dispatch({
      type: "LOGOUT",
      payload,
    });

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
