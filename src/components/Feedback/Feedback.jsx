export const Feedback = ({ value, onUpdate, onReset }) => {
  return (
    <div>
      <p onClick={() => onUpdate}>Good: {value.good}</p>
      <p onClick={() => onUpdate}>Neutral: {value.neutral}</p>
      <p onClick={() => onUpdate}>Bad: {value.bad}</p>
      {<p onClick={onReset}></p>}
    </div>
  );
};
