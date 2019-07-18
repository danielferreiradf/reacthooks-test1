import { useState } from "react";

export default initialValue => {
  // initial value provided by the component
  const [value, setValue] = useState(initialValue);

  // Hook Methods, can create as many as desired
  const handleChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  // return the value and the methods
  return [value, handleChange, reset];
};
