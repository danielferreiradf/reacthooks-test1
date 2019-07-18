import React from "react";

import useInputState from "./hooks/useInputState";

const App = () => {
  // one UseInputState for each input of the form
  const [email, handleEmailChange, resetEmail] = useInputState("");
  const [password, handlePasswordChange, resetPassword] = useInputState("");

  return (
    <div>
      <h1>Email: {email}</h1>
      <input type="email" value={email} onChange={handleEmailChange} />
      <button onClick={resetEmail}>reset email</button>

      <h1>Password: {password}</h1>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <button onClick={resetPassword}>reset password</button>
    </div>
  );
};

export default App;
