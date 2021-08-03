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
import axios from "axios";

class App extends Component {
  state = {
    livros: [],
  };

  async componentDidMount() {
    try {
      const { data: livros } = await axios.get("/api/todosOsLivros.json");
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      document
        .querySelectorAll(".principal")[0]
        .insertAdjacentHTML("beforeend", "<p class='erro'>Houve um erro</p>");
    }
  }

  render() {
    console.log(this.state.livros);
    return (
      <Router>
        <>
          <Topo />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home livros={this.state.livros} />}
            />
            <Route exact path="/frontend" render={Frontend} />
            <Route exact path="/programacao" render={Programacao} />
            <Route exact path="/design" render={Design} />
            <Route exact path="/catalogo" render={Catalogo} />
            <Route render={NotFound} />
          </Switch>
          <Rodape />
        </>
      </Router>
    );
  }
}

export default App;
