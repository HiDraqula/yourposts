import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    loader: false,
  },
  reducers: {
    setLoader: (state, action) => {
      state.loader = Boolean(action.payload);
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
