import React from 'react'
import PropTypes from 'prop-types'
import s from './Filter.module.css'

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.filter} >
      Find
      <input
        className={s.input}
        value={value}
        type="text"
        onChange={onChange}
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
