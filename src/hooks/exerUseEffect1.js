import React, { useEffect } from "react";
import { useForm } from "./hooks/userForm";

const App = () => {
  const [values, handleChange] = useForm({
    firstName: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    console.log("render");
  }, [values.email, values.password]);

  return (
    <div>
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
