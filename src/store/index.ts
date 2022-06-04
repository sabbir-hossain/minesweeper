import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let composeWithMiddleware;
if (process.env.NODE_ENV === "development") {
  composeWithMiddleware = applyMiddleware(thunk, logger);
} else {
  composeWithMiddleware = applyMiddleware(thunk);
}

export const store = createStore(
  rootReducer,
  composeEnhancers(composeWithMiddleware)
);
