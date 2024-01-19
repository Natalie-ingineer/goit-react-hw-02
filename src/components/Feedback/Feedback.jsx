export const Feedback = ({ value, onUpdate }) => {
  return (
    <div>
      <p onClick={() => onUpdate} name="good">
        Good: {value.good}
      </p>
      <p onClick={() => onUpdate} name="neutral">
        Neutral: {value.neutral}
      </p>
      <p onClick={() => onUpdate} name="bad">
        Bad: {value.bad}
      </p>
    </div>
  );
};
