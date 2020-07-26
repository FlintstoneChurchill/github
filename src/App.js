import React from 'react';
import {Route, Switch} from "react-router";
import Main from "./containers/Main/Main";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" component={Main} exact/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
