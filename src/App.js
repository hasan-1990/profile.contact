import React from "react";
import { confirmAlert } from "react-confirm-alert";
import { COURENTLINE, PINK, PURPLE, RED } from "./component/helper/color.js";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./css/font.css";
import { ContactContext } from "./context/Contactcontext";
import { useEffect } from "react";
import { useState } from "react";
import {
  getAllContacts,
  getAllGroups,
  createContact,
  deleteContact,
} from "../src/component/serverurl.js";
import {
  Contacts,
  Navbar,
  Addcontact,
  Editcontact,
  Viewcontact,
} from "./component/Index.jsx";
import { FORGROUND, YELLOW } from "./component/helper/color.js";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [contact, setContact] = useState({});
  const [contactQuery, setContactQuery] = useState({ text: "" });
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroups();
        setContacts(contactsData);
        setFilteredContacts(contactsData);
        setGroups(groupsData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const onContactChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };
  const createContactForm = async (event) => {
    event.preventDefault();
    try {
      // setLoading((prevLoading) => !prevLoading);
      const { status, data } = await createContact(contact);
      // rerender > forcerender setforcesetrender
      // setcontact (data)
      if (status === 201) {
        const allContacts = [...contacts, data];
        setContacts(allContacts);
        // setLoading((prevLoading) => !prevLoading);
        setFilteredContacts(allContacts);
        setContact({});
        // setLoading((prevLoading) => !prevLoading);
        navigate("/contacts");
        alert("مخاطب جدید اضافه شد");
      }
    } catch (error) {}
    setLoading(false);
    // setLoading((prevLoading) => !prevLoading);
  };

  const confirmDelete = (contactId, contactFullname) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            dir="rtl"
            style={{
              backgroundColor: COURENTLINE,
              border: `1px solid ${PURPLE}`,
              borderRadius: "1em",
            }}
          >
            <h1 style={{ color: YELLOW }}>حذف مخاطب</h1>
            <p style={{ color: FORGROUND }}>
              {" "}
              ایا مایل به هذف هستید {contactFullname}?
            </p>
            <button
              className="btn"
              onClick={() => {
                removeContact(contactId);
                onClose();
              }}
              style={{ color: RED }}
            >
              مطمعن هستم
            </button>
            <button className="btn" onClick={onClose} style={{ color: PINK }}>
              مطمعن نیستم
            </button>
          </div>
        );
      },
    });
  };

  const removeContact = async (contactId) => {
    try {
      setLoading(true);
      const response = await deleteContact(contactId);
      if (response) {
        const { data: contactData } = await getAllContacts();
        setContacts(contactData);
        setLoading(false);

        alert("بای بای مخاطب دیگه نداری");
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const contactSearch = (event) => {
    setContactQuery({ ...contactQuery, text: event.target.value });
    const allContacts = contacts.filter((contact) => {
      return (contact.fullname || "")
        .toLowerCase()
        ?.includes(event.target.value.toLowerCase());
    });
    setFilteredContacts(allContacts);
  };

  // const contactSearch = (event) => {
  //   setContactQuery({ ...contactQuery, text: event.target.value });
  //   const allContacts = Contacts.filter((contact) => {
  //     return contact.fullname
  //       ?.toLowerCase()
  //       .includes(event.target.value.toLowerCase());
  //   });
  //   setFilteredContacts(allContacts);
  // }

  return (
    <ContactContext.Provider
      value={{
        loading,
        setLoading,
        contact,
        setContact,
        contacts,
        filteredContacts,
        contactQuery,
        groups,
        onContactChange,
        deleteContact: confirmDelete,
        createContact: createContactForm,
        contactSearch,
      }}
    >
      <>
        <Navbar query={contactQuery} search={contactSearch} />
        <Routes>
          <Route path="/" element={<Navigate to="/contacts" />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/:contactId" element={<Viewcontact />} />
          <Route path="/contacts/add" element={<Addcontact createContactForm={createContactForm} />} />
          <Route path="/contacts/edit/:contactId" element={<Editcontact />} />
        </Routes>
      </>
    </ContactContext.Provider>
  );
};

export default App;
