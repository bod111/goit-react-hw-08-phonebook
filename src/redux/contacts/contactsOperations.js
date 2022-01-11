import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../service/Api";

const endpoint = "contacts";

export const getContacts = createAsyncThunk("contacts/getContactsStatus", () =>
  api.getContacts(endpoint)
);

export const addContact = createAsyncThunk(
  "contact/addContactStatus",
  (newContact) => api.addContact(endpoint, newContact)
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContactStatus",
  (id) => api.deleteContact(endpoint, id)
);
