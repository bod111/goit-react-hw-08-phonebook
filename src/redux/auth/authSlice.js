import { createSlice } from "@reduxjs/toolkit";
import {
  addNewAccount,
  loginAccount,
  getCurrentUser,
  logOut,
} from "./authOperations";

const initialState = {
  user: { name: "", email: "" },
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(addNewAccount.fulfilled, (state, { payload }) => {
      state = payload;
      console.log("builder.addCase ~ payload", payload);
    });
    builder.addCase(loginAccount.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      console.log("builder.addCase ~ payload", payload);
    });

    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state = payload;
    });
    builder.addCase(logOut.fulfilled, (state, { payload }) => {
      state.user = { name: "", email: "" };
      state.token = "";
    });
  },
});

export default authSlice.reducer;
