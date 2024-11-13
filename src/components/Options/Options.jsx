import PropTypes from 'prop-types';
const Options = ({ handleFeedback, handleResetClick, totalFeedback }) => {
  return (
      <div>
          <button onClick={() => handleFeedback("good")}>Good</button>
          <button onClick={() => handleFeedback("neutral")}>Neutral</button>
          <button onClick={() => handleFeedback("bad")}>Bad</button>
          {totalFeedback > 0 && (<button onClick={handleResetClick}>Reset</button>)}
      </div>
  );
};
// Define PropTypes for Options component
Options.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
  handleResetClick: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options