import PropTypes from 'prop-types';
import { ButtonFeedback } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <ButtonFeedback
        onClick={() => {
          onLeaveFeedback(option);
        }}
        key={option}
        type="button"
      >
        {option}
      </ButtonFeedback>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
