import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  deleteContact,
  getContacts,
} from "../../redux/contacts/contactsOperations";
import { getFilteredContacts } from "../../redux/contacts/contactsSelectors";
import s from "./Contacts.module.css"

const Contacts = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilteredContacts);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  
  return (
    <ul>
      {filterContacts.map((option) => {
        return (
          filterContacts.lendth !== 0 && (
            <li className={s.contact} key={option.id}>
              {option.name }: {option.number}
              
              <button className={s.deleteBtn} name={option.id} type="button" onClick={() => dispatch(deleteContact(option.id))}>
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
