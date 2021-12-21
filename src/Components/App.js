import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import Section from "./Section/Section";

export default function App() {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title={"Contacts"}>
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}
