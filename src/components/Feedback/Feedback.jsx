import { useState } from "react";

const Feedback = () => {
  const [count, setCount] = useState(0);
  console.log(useState(0));

  const handleClick = () => {
    setCount(count + 1);
  };
  return <button onClick={handleClick}>Total click - {count}</button>;
};

export { Feedback };
