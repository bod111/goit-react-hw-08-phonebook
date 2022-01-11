import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { filterContacts }  from "../../redux/contacts/contactsSlice";
import { getFilter } from "../../redux/contacts/contactsSelectors";
import s from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  console.log("Filter ~ filter", filter)
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
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter
