import { configureStore, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   count: 0,
// };

const loginSlice = createSlice({
  name: "login",
  initialState: {
    // username: "",
    // password: "",
    token: "",
  },
  reducers: {
    sendToken: function (state, action) {
      state.token = action.payload;
    },
    // sendPassword: function (state, action) {
    //   state.password = action.payload;
    // },
  },
});

export const mainStore = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export const { sendToken } = loginSlice.actions;
export default loginSlice.reducer;
