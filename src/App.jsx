import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
    </div>
  );
}

export default App;
