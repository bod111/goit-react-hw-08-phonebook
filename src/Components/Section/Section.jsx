
import PropTypes from 'prop-types'

const Section = ({ title, children }) => {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Section
