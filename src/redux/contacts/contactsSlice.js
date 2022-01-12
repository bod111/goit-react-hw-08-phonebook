import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "./contactsOperations";

const initialState = {
  items: [],
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      console.log("action", action);

      return { ...state, filter: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          (contact) => contact.id === payload.id
        );
        state.items.splice(index, 1);
      });
  },
});

export const { filterContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
