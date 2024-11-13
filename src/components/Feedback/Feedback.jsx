import "./Feedback.module.css"
import PropTypes from 'prop-types';
const Feedback = ({ good, neutral, bad, totalPercScore, }) => {
  return (
      <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Positive:{totalPercScore}%</p>
      </div>
  );
};
// Define PropTypes for Feedback component
Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalPercScore: PropTypes.number.isRequired,
};

export default Feedback