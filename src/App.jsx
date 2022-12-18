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

    //   <Joke
    //   setup="Why do bees stay in the hive in the winter?"
    //   punchline="Swarm"
    // />
    // <Joke
    //   setup="Why don't pirates travel on mountain roads?"
    //   punchline="scurvy"
    // />
    // <Joke
    //   setup="I got my daughter a fridge for her birthday."
    //   punchline="I can't wait to see her face light up when she opens it."
    // />
    // <Joke
    //   setup="How did the hacker escape the police?"
    //   punchline="He just ransomware!"
    // />
    // <Joke
    //   setup="What's the best thing about Switzerland?"
    //   punchline="I don't know, but the flag is a big plus!"
    // />
  );
}

export default App;
