import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initializeStore } from "./store/store";
import "./App.css";
import BondsList from "./bonds/BondsList/BondsList";
import BondDetails from "./bonds/BondDetails/BondDetails";

function App() {
  return (
    <Provider store={initializeStore()}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/bond/:id">
              <BondDetails />
            </Route>
            <Route path="/">
              <BondsList />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
