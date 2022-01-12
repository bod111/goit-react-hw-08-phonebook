import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import contactsReducer from "./contacts/contactsSlice";
import authReducer from "./auth/authSlice";

// const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    autorization: authReducer,
    contacts: contactsReducer,
  },
  // middleware,
});

export { store };
