import { useState } from "react";
import { Description } from "../components/Description/Description";
import { Options } from "../components/Options/Options";
import { Feedback } from "../components/Feedback/Feedback";

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = (option) => {
    setClicks({
      ...clicks,
      [option]: clicks[option] + 1,
    });
  };

  // console.log(clicks.good);
  // console.log(clicks.neutral);
  // console.log(clicks.bad);
  let totalFeedback = 0;
  totalFeedback += clicks.good + clicks.neutral + clicks.bad;
  console.log(totalFeedback);

  let isVisible = totalFeedback > 0;

  const onReset = (option) => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </Description>

      <Options
        value={clicks}
        onUpdate={onLeaveFeedback}
        onReset={onReset}
        disabled={isVisible}
      />
      {totalFeedback > 0 ? (
        <Feedback
          value={clicks}
          onUpdate={onLeaveFeedback}
          onTotal={totalFeedback}
        />
      ) : (
        "No feedback yet"
      )}
    </>
  );
};

export { App };
