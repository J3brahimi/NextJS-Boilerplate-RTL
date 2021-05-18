import userReducer from "./reducers/user.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
