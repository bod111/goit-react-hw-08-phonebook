import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../service/Api";

export const addNewAccount = createAsyncThunk(
  "auth/register",
  async (newAccount) => {
    try {
      const newRegister = await api.registration(newAccount);
      return newRegister;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginAccount = createAsyncThunk("auth/login", async (logAcc) => {
  try {
    const loginUser = await api.login(logAcc);
    return loginUser;
  } catch (error) {
    console.log(error);
  }
});

export const getCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      if (state.autorization.token === null) {
        return thunkAPI.rejectWithValue();
      }
      const getUser = await api.fetchCurrentUser(state.autorization.token);
      return getUser;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const userLogOut = await api.loginOut(state.autorization.token);
    return userLogOut;
  } catch (error) {
    console.log(error);
  }
});
