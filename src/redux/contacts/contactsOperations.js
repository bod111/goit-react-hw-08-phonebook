import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../service/Api";

const endpoint = "contacts";

export const getContacts = createAsyncThunk(
  "contacts/getContactsStatus",
  (_, thunkAPI) => {
    const state = thunkAPI.getState();
    return api.getContacts(endpoint, state.autorization.token);
  }
);

export const addContact = createAsyncThunk(
  "contact/addContactStatus",
  (newContact, thunkAPI) => {
    const state = thunkAPI.getState();
    return api.addContact(endpoint, newContact, state.autorization.token);
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContactStatus",
  (id, thunkAPI) => {
    const state = thunkAPI.getState();
    return api.deleteContact(endpoint, id, state.autorization.token);
  }
);
