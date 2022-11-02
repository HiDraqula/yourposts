import { dispatch } from "./store";

export const setLoader = (bool) => {
  dispatch({ type: "app/setLoader", payload: bool });
};
