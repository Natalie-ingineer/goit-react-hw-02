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
  let totalFeedback = 1;
  totalFeedback += clicks.good + clicks.neutral + clicks.bad;
  console.log(totalFeedback);

  const isHidden = clicks < clicks.length - 1;

  // const onReset = (option) => {
  //   setClicks({
  //     [option]: clicks[option] === 0,
  //   });
  // };

  // const counterFeedback = () => {
  //   totalFeedback += 1;
  //   console.log(totalFeedback);
  // };
  //   counterFeedback(option)
  // "good" + "neutral" + "bad";

  return (
    <>
      <Description>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </Description>

      <Options value={clicks} onUpdate={onLeaveFeedback} disabled={isHidden} />
      {totalFeedback > 1 ? (
        <Feedback value={clicks} onUpdate={onLeaveFeedback} />
      ) : (
        "No feedback yet"
      )}
    </>
  );
};

export { App };
