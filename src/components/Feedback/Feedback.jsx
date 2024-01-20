export const Feedback = ({ value, onUpdate, onTotal }) => {
  let totalFeedback = value.good + value.neutral + value.bad;
  let positiveFeedback = Math.round(
    ((value.good + value.neutral) / totalFeedback) * 100
  );

  return (
    <div>
      <p onClick={() => onUpdate}>Good: {value.good}</p>
      <p onClick={() => onUpdate}>Neutral: {value.neutral}</p>
      <p onClick={() => onUpdate}>Bad: {value.bad}</p>
      <p onClick={() => onTotal}>Total: {totalFeedback}</p>
      <p onClick={() => onTotal}>Positive: {positiveFeedback} %</p>
    </div>
  );
};
