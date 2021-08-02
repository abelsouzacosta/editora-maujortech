import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Topo />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/frontend" component={Frontend} />
            <Route exact path="/programacao" component={Programacao} />
            <Route exact path="/design" component={Design} />
            <Route exact path="/catalogo" component={Catalogo} />
            <Route component={NotFound} />
          </Switch>
          <Rodape />
        </>
      </Router>
    );
  }
}

export default App;
