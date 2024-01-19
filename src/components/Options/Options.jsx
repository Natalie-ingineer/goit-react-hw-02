import { useState } from "react";

const Options = () => {
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
      <button onClick={handleClickGood}>good: {good}</button>;
      <button onClick={handleClickNeutral}>neutral: {neutral}</button>;
      <button onClick={handleClickBad}>bad: {bad}</button>;
    </div>
  );
};

export { Options };

// let value = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };
