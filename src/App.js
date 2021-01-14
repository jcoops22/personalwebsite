import { useState } from "react";
import "./App.css";
import Statement from "./Components/Intro/Statement";
import List from "./Components/Intro/List";
import Navigation from "./Components/Navigation";

function App() {
  const [developerItems] = useState([
    "Building full stack applications with modern JavaScript frameworks",
    "Backend proficiencies with NodeJS, Ruby and Python",
  ]);
  return (
    <div className="App container min-h-screen min-w-full box-content bg-pink-600 dark:bg-gray-700 pt-20 overflow-hidden relative">
      <Navigation />
      <div>
        <h1 className="text-4xl mx-auto font-header text-white my-10 text-right pr-8">
          I'm Jonathan
        </h1>
      </div>
      <Statement text="Developer">
        <List items={developerItems} />
      </Statement>
      <Statement text="Designer">
        <List items={developerItems} />
      </Statement>
      <Statement text="UX/UI">
        <List items={developerItems} />
      </Statement>
    </div>
  );
}

export default App;
