import { createContext } from "react";

export const ContactContext = createContext({
    loading: false,
    setLoading: () => {},
    contact: {},
    setContact: () => {},
    filteredContacts: [],
    contactQuery: {},
    groups: [],
    onContactChange: () => {},
    deleteContact: () => {},
    UpdateContact: () => {},
    createContact: () => {},
    contactSearch: () => {},
});
