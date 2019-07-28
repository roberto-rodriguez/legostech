import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/";
import "./pages/common/common.scss";

const About = () => <h2>About</h2>;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </BrowserRouter>
    </div>
  );
}

export default App;
