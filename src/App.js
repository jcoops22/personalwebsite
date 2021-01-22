import React from "react";
import "./App.css";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Routes/Home";
import Work from "./Components/Routes/Work";
import Contact from "./Components/Routes/Contact";

function App() {
  return (
    <AppWrapper className="App bg-gray-700">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </AppWrapper>
  );
}

export default App;

// styles
const AppWrapper = styled.div``;
