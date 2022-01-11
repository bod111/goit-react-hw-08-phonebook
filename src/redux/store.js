import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import contactsReducer from "./contacts/contactsSlice";

// const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  // middleware,
});

export { store };
