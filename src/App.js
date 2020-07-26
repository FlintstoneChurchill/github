import React from 'react';
import {Route, Switch} from "react-router";
import Main from "./containers/Main/Main";
import Layout from "./components/Layout/Layout";
import Repositories from "./containers/Repositories/Repositories";
import UsersSearch from "./containers/UsersSearch/UsersSearch";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/users" component={UsersSearch} exact/>
          <Route path="/:user/repos" component={Repositories} exact/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
