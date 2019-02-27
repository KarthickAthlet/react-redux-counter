import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counter from "./reducers/reducers";

const store = createStore(counter, applyMiddleware(thunk));

export default store;
