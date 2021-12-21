import { createAction } from "@reduxjs/toolkit";

const addToPhonebook = createAction("contacts/addToPhonebook");

const deleteFromPhonebook = createAction("contacts/deleteFromPhonebook");

const filterContacts = createAction("contacts/filterContacts");

export { addToPhonebook, deleteFromPhonebook, filterContacts };