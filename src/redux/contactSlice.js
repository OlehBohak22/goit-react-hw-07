// src/redux/contactsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../data.json";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: initialContacts, // Початкові контакти
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export const selectContacts = (state) => state.contacts.items;

export default contactSlice.reducer;