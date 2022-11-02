import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/post.reducer";
import appReducer from "./app.reducer";
const store = configureStore({
  reducer: { post: postReducer, app: appReducer },
});
const dispatch = store.dispatch;

export { store, dispatch };
