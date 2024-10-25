import PropTypes from 'prop-types'

const Total = (props) => {

  const parts = props.parts;
  const sum = parts.reduce((total, part) => total + part.exercises, 0)
  return (
    <p>Number of exercises {sum}</p>
  )
}

Total.propTypes = {
  parts: PropTypes.array,
}

export default Total