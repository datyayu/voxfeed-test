import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";

import { reducer } from "./reducers";
import { history } from "./Routes";

const routingMiddleware = routerMiddleware(history);
const middleware = applyMiddleware(routingMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(middleware));
