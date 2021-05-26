import { applyMiddleware, createStore } from "redux";
import { ShopReducer } from "./ShopReducer";
import { compositeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  ShopReducer
  // compositeWithDevTools(applyMiddleware(thunk))
);

export default store;
