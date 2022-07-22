import { createStore } from "redux";
import { listReducer } from "../reducer/listReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(listReducer, composeWithDevTools());
