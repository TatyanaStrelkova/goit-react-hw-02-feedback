import PropTypes from 'prop-types';
import { NotifyMessage } from './NotificationMessage.styled';

const NotificationMessage = ({ message }) => {
  return <NotifyMessage>{message}</NotifyMessage>;
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificationMessage;
