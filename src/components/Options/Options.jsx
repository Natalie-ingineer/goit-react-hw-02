export const Options = ({ onUpdate, disabled, onReset }) => {
  return (
    <div>
      <button onClick={() => onUpdate("good")} name="good">
        Good
      </button>
      <button onClick={() => onUpdate("neutral")} name="neutral">
        Neutral
      </button>
      <button onClick={() => onUpdate("bad")} name="bad">
        Bad
      </button>
      {disabled && <button onClick={onReset}>Reset</button>}
    </div>
  );
};
