import { useState } from "react";

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <p onClick={handleClickGood}>Good: {good}</p>;
      <p onClick={handleClickNeutral}>Neutral: {neutral}</p>;
      <p onClick={handleClickBad}>Bad: {bad}</p>;
    </div>
  );
};

export { Feedback };
