import { createSlice } from "@reduxjs/toolkit";
import {
  addNewAccount,
  loginAccount,
  getCurrentUser,
  logOut,
} from "./authOperations";

const initialState = {
  user: { name: "", email: "" },
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(addNewAccount.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      // console.log("builder.addCase ~ payload", payload);
    });
    builder.addCase(loginAccount.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      // console.log("builder.addCase ~ payload", payload);
    });

    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(logOut.fulfilled, (state, { payload }) => {
      state.user = { name: "", email: "" };
      state.token = null;
    });
  },
});

export default authSlice.reducer;
