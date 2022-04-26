import { combineReducers } from "redux";

import gifsSlice from "./gifs";

export default combineReducers({
  [gifsSlice.name]: gifsSlice.reducer,
});
