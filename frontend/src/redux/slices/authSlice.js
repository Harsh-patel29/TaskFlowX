import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  logoutUser,
  loginDetail,
} from "../thunks/userThunk.js";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    data: null,
    loginuser: null,
    logoutUser: null,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetRegister: (state) => {
      state.data = null;
      state.loading = false;
      state.error = false;
    },
    resetLogin: (state) => {
      state.loginuser = null;
      state.loading = false;
      state.error = false;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginuser = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.logoutUser = action.payload;
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(loginDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginDetail.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginDetail.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
      });
  },
});
export const { resetRegister, resetLogin, resetlogindetail } =
  registerSlice.actions;
export default registerSlice.reducer;
