import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: "",
  },
  reducers: {
    sendToken: function (state, action) {
      state.token = action.payload;
    },
  },
});

export const mainStore = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export const { sendToken } = loginSlice.actions;
export default loginSlice.reducer;
