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

  const isHidden = clicks < clicks.length - 1;

  const onReset = (option) => {
    setClicks({
      ...clicks,
      [option]: clicks[option] === 0,
    });
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

      <Options value={clicks} onUpdate={onLeaveFeedback} disabled={isHidden} />
      <Feedback value={clicks} onUpdate={onLeaveFeedback} />
    </>
  );
};

export { App };
