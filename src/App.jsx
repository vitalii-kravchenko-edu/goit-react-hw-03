import { nanoid } from "nanoid";

import { useState, useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import initialContactList from "./initialContactList.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contactsStorage");
    return JSON.parse(stringifiedContacts) ?? initialContactList;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contactsStorage", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (formData) => {
    const newContact = {
      ...formData,
      id: nanoid(),
    };

    setContacts((prevState) => [...prevState, newContact]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
}

export default App;
