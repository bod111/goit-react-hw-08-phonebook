import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import contactsReducer from "./contacts/contactsSlice";
import authReducer from "./auth/authSlice";

const persistAuthConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
// const persistContactsConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["items"],
// };

// const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    autorization: persistReducer(persistAuthConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);
export { store, persistor };

//////////////////////////////////////////////////////////////
// import { configureStore } from "@reduxjs/toolkit";
// // import logger from "redux-logger";
// import contactsReducer from "./contacts/contactsSlice";
// import authReducer from "./auth/authSlice";

// // const middleware = [...getDefaultMiddleware(), logger];

// const store = configureStore({
//   reducer: {
//     autorization: authReducer,
//     contacts: contactsReducer,
//   },
//   // middleware,
// });

// export { store };
