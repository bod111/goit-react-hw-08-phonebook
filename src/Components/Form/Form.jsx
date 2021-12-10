import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

 class Form extends Component {
  state = {
    name: "",
    number: "",
    id: "",
   };
   
   reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };
   
   handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
   };
   
   
   onFormSubmit = e => {
     e.preventDefault();
      const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
     };
     if (this.props.isNameExist(this.state.name)) {
      return alert(`${this.state.name} is already in contacts`);
    }
    this.props.onSubmit({ ...newContact });
    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
         <label>
          Name
          <input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number
          <input
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
         <button type="submit">Add contact</button>
      </form>
    )
  }
}
Form.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func.isRequired,
};
export default Form