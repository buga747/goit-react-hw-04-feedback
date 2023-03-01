import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

const capitalize = stringItem =>
  `${stringItem[0].toUpperCase()}${stringItem.slice(1)}`;

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Container>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {capitalize(option)}
        </Button>
      ))}
    </Container>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.elementType,
};

export default FeedbackOptions;
