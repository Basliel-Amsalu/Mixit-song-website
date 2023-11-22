import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import { songReducer, sideEffectReducer } from "./reducers";
import sagaMiddleware from "./middleware";
import { rootSaga } from "./middleware";

const store = configureStore({
  reducer: { song: songReducer, sideEffect: sideEffectReducer },
  middleware: [sagaMiddleware],
});
console.log(store.getState());
sagaMiddleware.run(rootSaga);
export default store;
