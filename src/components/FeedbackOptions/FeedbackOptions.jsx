import React from 'react';
import PropTypes from 'prop-types';
import { SectionButtons, ButtonEl } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <SectionButtons>
      {options.map(name => (
        <ButtonEl
          key={name}
          type="button"
          name={name}
          onClick={onLeaveFeedback}
        >
          {name}
        </ButtonEl>
      ))}
    </SectionButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
