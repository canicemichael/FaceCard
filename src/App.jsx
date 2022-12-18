import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Card from "./components/Card";
import Joke from "./components/Joke";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
