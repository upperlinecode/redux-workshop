import { applyMiddleware, compose, createStore, StoreEnhancer } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./redux/rootReducer";
import type { AppState } from "./redux/initialState";

const configureStore = (state?: Partial<AppState>) => {
  const composeEnhancers =
    typeof window === "object" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
  );

  const store = createStore(rootReducer, state, enhancer);

  return store;
};

export default configureStore;
