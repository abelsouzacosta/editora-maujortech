import React from "react";
import { NavLink as Link } from "react-router-dom";

let linkCorrente = {
  color: "#027399",
};

const Navegacao = () => {
  return (
    <ul>
      <li>
        <Link exact activeStyle={linkCorrente} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link exact activeStyle={linkCorrente} to="/frontend">
          Frontend
        </Link>
      </li>
      <li>
        <Link exact activeStyle={linkCorrente} to="/programacao">
          Programação
        </Link>
      </li>
      <li>
        <Link exact activeStyle={linkCorrente} to="/design">
          Design
        </Link>
      </li>
      <li>
        <Link exact activeStyle={linkCorrente} to="/catalogo">
          Catálogo
        </Link>
      </li>
    </ul>
  );
};

export default Navegacao;
