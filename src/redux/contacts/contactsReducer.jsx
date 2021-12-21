import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addToPhonebook,
  deleteFromPhonebook,
  filterContacts,
} from "./contactsActions";

const contactsItemsReducer = createReducer([], {
  [addToPhonebook]: (state, { payload }) => [...state, payload],
  [deleteFromPhonebook]: (state, { payload }) =>
    state.filter((contact) => payload !== contact.id),
});

const contactFilterReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: contactsItemsReducer,
  filter: contactFilterReducer,
});

export default contactsReducer;