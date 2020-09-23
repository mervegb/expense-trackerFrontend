import React, { Component } from "react";
import Category from "./Category";
import Home from "./Home";
import Expenses from "./Expenses";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* exact means matching the exact route */}
          <Route path="/" exact={true} component={Home} />
          <Route path="/categories" exact={true} component={Category} />
          <Route path="/expenses" exact={true} component={Expenses} />
        </Switch>
      </Router>
    );
  }
}

export default App;
