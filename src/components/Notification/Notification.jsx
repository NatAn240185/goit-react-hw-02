import PropTypes from 'prop-types';
const Notification = ({ message }) => {
  return <div className="notification">{message}</div>;
};
// Define PropTypes for Notification component
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;