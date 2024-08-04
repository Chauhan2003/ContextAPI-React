import React from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <h1>Hello, ContextAPI!</h1>

      <Login />
      <Profile />
    </>
  );
};

export default App;
