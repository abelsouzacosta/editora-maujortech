import React from "react";

const App = () => {
  return (
    <>
      <header className="topo">
        <h1 className="logo"></h1>
        <ul>
          <li>
            <a href="">Navegação</a>
          </li>
        </ul>
      </header>
      <main className="principal">
        <h2>Últimos Lançamentos</h2>
        <div className="card">Card</div>
      </main>
      <footer className="rodape">
        <p>Conteúdos cedidos pela editora Novatec &#8212; Copyright 2021</p>
      </footer>
    </>
  );
};

export default App;
