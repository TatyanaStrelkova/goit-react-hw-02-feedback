import PropTypes from 'prop-types';
import { FeedbackSection, FeedbackTitle } from './SectionStyled.styled';

const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </FeedbackSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
