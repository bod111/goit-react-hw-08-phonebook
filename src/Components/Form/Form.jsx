import { useState } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import s from './Form.module.css'

 const Form = ({ isNameExist, onSubmit }) => {

   const [name, setName] = useState("");
   const [number, setNumber] = useState("");
   
   const reset = () => {
     setName("");
     setNumber("");
  };
   
  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "name" && setName(value);
    name === "number" && setNumber(value);
   };
   
   
   const onFormSubmit = e => {
     e.preventDefault();
      const newContact = {
      name,
      number,
      id: nanoid(),
     };
     if (isNameExist(name)) {
      return alert(`${name} is already in contacts`);
    }
    onSubmit({ ...newContact });
    reset();
  };

  
    return (
      <form className={s.form} onSubmit={onFormSubmit}>
         <label>
          Name
          <input
            className={s.input}
            value={name}
            onChange={handleChange}
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
            className={s.input}
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
         <button className={s.submitBtn} type="submit">Add contact</button>
      </form>
    )
  }

Form.propTypes = {
  isNameExist: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default Form