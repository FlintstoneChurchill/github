import React from 'react';
import {Route, Switch} from "react-router";
import Main from "./containers/Main/Main";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>
    </div>
  );
}

export default App;
