import { useState } from "react";
import { Description } from "../components/Description/Description";

const Options = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return <button onClick={handleClick}>Total click - {count}</button>;
};
// let value = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

const App = () => {
  return (
    <>
      <Description>
        <h1>Cafe</h1>
        <p>Text</p>
      </Description>
      <>
        <Options />
        <Options />
        <Options />
      </>
    </>
  );
};

export { App };

{
  /*  */
}
