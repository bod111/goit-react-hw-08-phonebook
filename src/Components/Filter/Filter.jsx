import React from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { filterContacts } from "../../redux/contacts/contactsActions";
import { getFilter } from "../../redux/contacts/contactsSelectors";
import s from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <label className={s.filter} >
      Find
      <input
        className={s.input}
        value={filter}
        type="text"
        onChange={(e) => dispatch(filterContacts(e.currentTarget.value))}
        name="filter"
      ></input>
    </label>
  )
}


export default Filter
