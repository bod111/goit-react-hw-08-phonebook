import { useState, useEffect } from "react";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import Section from "./Section/Section";

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);
  const formHandler = (data) => {
    setContacts((prevState) => {
      return [...prevState, data];
    });
  };

  const onChangeFilter = (e) => setFilter(e.currentTarget.value);

  const isNameExist = (formState) => {
    const some = contacts.some(
      (contact) => contact.name.toLowerCase() === formState.toLowerCase()
    );
    return some;
  };

  const onDelete = (e) => {
    e.preventDefault();
    const newFilter = contacts.filter(
      (contact) => e.target.name !== contact.id
    );
    setContacts([...newFilter]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <Section title="Phonebook">
        <Form isNameExist={isNameExist} onSubmit={formHandler} />
      </Section>
      <Section title={"Contacts"}>
        <Filter value={filter} onChange={onChangeFilter} />
        {contacts.length !== 0 && (
          <Contacts onDelete={onDelete} options={filteredContacts} />
        )}
      </Section>
    </>
  );
};

export default App;
