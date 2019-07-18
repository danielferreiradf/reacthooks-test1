import { useState } from "react";

const useToggle = initialValue => {
  // call useState, use initial value provided by the component
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    setState(!state);
  };
  // Can return a arry or object, followed array cause hooks pattern
  return [state, toggle];
};

export default useToggle;
