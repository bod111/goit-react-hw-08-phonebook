import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { nanoid } from 'nanoid'
import { addToPhonebook } from "../../redux/contacts/contactsActions";
import { getContacts } from "../../redux/contacts/contactsSelectors";
import s from './Form.module.css'

export default function Form() {
    const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

   const [name, setName] = useState("");
   const [number, setNumber] = useState("");
   
   const reset = () => {
     setName("");
     setNumber("");
  };
   
   const isNameExist = (formState) => {
    const some = contacts.some(
      (contact) => contact.name.toLowerCase() === formState.toLowerCase()
    );
    return some;
  };
  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    name === "name" && setName(value);
    name === "number" && setNumber(value);
  };
  useEffect(() => {
    if (contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);
  const onFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    if (isNameExist(name)) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addToPhonebook(newContact));
    reset();
  };

  
    return (
      <form className={s.form} onSubmit={onFormSubmit}>
         <label>
          Name
          <input
            className={s.input}
            value={name}
            onChange={onChange}
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
            onChange={onChange}
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
