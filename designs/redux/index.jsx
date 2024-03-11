import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const initialUserState = {
  currentState: "",
  loader: false,
  loggedIn: false,
  token: localStorage.getItem("token") || undefined,
  user: {},
  error: false,
};

const clearLocalStorage = () => {
  localStorage.removeItem("token");
};

export const getProfileData = createAsyncThunk(
  "user/getProfileData",
  async (postUserProfil, { getState, dispatch }) => {
    const { token } = getState().user;

    if (!token) {
      return;
    }

    const response = await postUserProfil();

    if (response.status === 200) {
      dispatch(userSlice.actions.userDetails(response.data.body));
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    successfulLogin: (state, action) => {
      state.loggedIn = true;
      state.token = action.payload.token;
      state.currentState = "logged";
      state.loader = true;

      localStorage.setItem("token", action.payload.token);
    },
    userDetails: (state, action) => {
      state.user = action.payload;
      state.loader = false;
    },
    logoutUser: () => {
      clearLocalStorage();
      return initialUserState;
    },
  },
});

export const mainStore = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const { successfulLogin, userDetails, logoutUser } = userSlice.actions;
export default userSlice.reducer;
