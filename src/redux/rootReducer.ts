import { combineReducers } from "redux";

import gifReducer from "./gifs";

export default combineReducers({
  gifs: gifReducer,
});
