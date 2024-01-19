import { useState } from "react";
import { Description } from "../components/Description/Description";
import { Options } from "../components/Options/Options";
import { Feedback } from "../components/Feedback/Feedback";

const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    // clicks = clicks + 1;
    setClicks(clicks + 1);
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
      <button onClick={handleClick}>Current: {clicks}</button>;
      <Options />
      <Feedback />
    </>
  );
};

export { App };
