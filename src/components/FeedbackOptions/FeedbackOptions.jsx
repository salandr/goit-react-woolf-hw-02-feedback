import { Button } from '../Button/Button';

function FeedbackOptions({ options, onLeaveFeedbackOptions }) {
  return (
    <div>
      {options.map((item, index) => {
        return (
          <Button handleClick={() => onLeaveFeedbackOptions(item)}>
            {item}
          </Button>
        );
      })}
    </div>
  );
}

export { FeedbackOptions };
