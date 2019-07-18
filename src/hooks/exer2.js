import React, { useState } from "react";

const App = () => {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(20);

  return (
    <div>
      <button
        onClick={() => {
          setCount1(currentState => currentState + 1);
          setCount2(currentState => currentState + 1);
        }}
      >
        +
      </button>
      <div>count 1: {count1}</div>
      <div>count 2: {count2}</div>
    </div>
  );
};

export default App;
