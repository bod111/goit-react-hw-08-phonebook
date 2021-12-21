import React from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteFromPhonebook } from "../../redux/contacts/contactsActions";
import { getContacts, getFilter } from "../../redux/contacts/contactsSelectors";
import s from './Contacts.module.css'

const Contacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const filterName = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filterName.map((option) => {
        return (
          filterName.lendth !== 0 && (
            <li className={s.contact} key={option.id}>
              {option.name }:{option.number}
              
              <button className={s.deleteBtn} name={option.id} type="button" onClick={() => dispatch(deleteFromPhonebook(option.id))}>
                Delete
              </button>
            </li>
          )
        );
      })}
    </ul>
  )
}



export default Contacts
