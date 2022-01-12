import { createSelector } from "reselect";

const getAllContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;
const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) =>
    contacts.length
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : []
);
export { getAllContacts, getFilter, getFilteredContacts };
