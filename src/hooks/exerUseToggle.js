import React from "react";

import useToogle from "./hooks/useToggle";

const App = () => {
  const [isHappy, toggleIsHappy] = useToogle(false);
  const [isNinja, toggleIsNinja] = useToogle(true);
  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? "😊" : "😢"}</h1>
      <h1 onClick={toggleIsNinja}>{isNinja ? "🐱‍👓" : "🐴"}</h1>
    </div>
  );
};

export default App;
