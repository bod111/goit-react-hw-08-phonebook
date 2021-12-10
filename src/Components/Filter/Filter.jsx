import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find
      <input
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
