import { applyMiddleware, compose, createStore, StoreEnhancer } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./redux/rootReducer";

export default (state?: any) => {
  const middleware = applyMiddleware(thunkMiddleware);

  const store = createStore(rootReducer, state, middleware);

  return store;
};
