import { Component } from "react";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import Section from "./Section/Section";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  formHandler = (data) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, data],
    }));
  };

  onChangeFilter = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  isNameExist = (formState) => {
    const some = this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === formState.toLowerCase()
    );
    return some;
  };

  onDelete = (e) => {
    e.preventDefault();
    const newFilter = this.state.contacts.filter(
      (contact) => e.target.name !== contact.id
    );
    this.setState({
      contacts: [...newFilter],
    });
  };

  render() {
    const filter = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <>
        <Section title="Phonebook">
          <Form
            isNameExist={this.isNameExist}
            state={this.state.contacts}
            onSubmit={this.formHandler}
          />
        </Section>
        <Section title={"Contacts"}>
          <Filter value={this.state.filter} onChange={this.onChangeFilter} />
          {this.state.contacts.length !== 0 && (
            <Contacts onDelete={this.onDelete} options={filter} />
          )}
        </Section>
      </>
    );
  }
}

export default App;
