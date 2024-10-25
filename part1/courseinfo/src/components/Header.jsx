
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>{props.course}</div>
  )
}

Header.propTypes = {
  course: PropTypes.string,
}

export default Header