import React, { useEffect, useState } from "react";
import { useForm } from "./hooks/userForm";

import Hello from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({
    firstName: "",
    email: "",
    password: ""
  });
  const [showHello, setShowHello] = useState(true);

  // useEffect(() => {
  //   console.log("render");

  //   return () => {
  //     console.log("umount");
  //   };
  // }, [values.email]);

  return (
    <div>
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
      <input
        name="firstName"
        placeholder="firtst name"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
