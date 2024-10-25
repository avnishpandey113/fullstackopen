
import PropTypes from 'prop-types';

const Part = (props) => {
  const parts = props.parts;
  return (
    <>
      {parts.map((part, index) => (
        <p key={index}>{part.name} {part.exercises}</p>
      ))}
    </>
  );
}
Part.propTypes = {
  parts: PropTypes.array,
}

export default Part