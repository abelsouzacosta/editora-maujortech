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

  componentDidMount() {
    fetch("/api/todosOsLivros.json")
      .then((response) => response.json())
      .then((livros) => this.setState({ livros }))
      .catch(function (error) {
        document
          .querySelectorAll("main")[0]
          .insertAdjacentHTML(
            "beforeend",
            "<p class='alerta'>houve um erro</p>"
          );
      })
      .finally(() => console.log(`Componente Carregado`));
  }

  render() {
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
            <Route
              exact
              path="/frontend"
              render={() => <Frontend livros={this.state.livros} />}
            />
            <Route
              exact
              path="/programacao"
              render={() => <Programacao livros={this.state.livros} />}
            />
            <Route
              exact
              path="/design"
              render={() => <Design livros={this.state.livros} />}
            />
            <Route
              exact
              path="/catalogo"
              render={() => <Catalogo livros={this.state.livros} />}
            />
            <Route render={NotFound} />
          </Switch>
          <Rodape />
        </>
      </Router>
    );
  }
}

export default App;
