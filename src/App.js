import About from "./pages/About";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React  from 'react';

function App() {
  return (
    <Router>
      <body>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/playground">
              <Playground />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </body>
    </Router>
  );
}

export default App;