import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setUser } = useContext(UserContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUser({
      username,
      password,
    });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {"  "}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {"  "}
      <button onClick={handleFormSubmit}>Submit</button>
    </div>
  );
};

export default Login;
