import React from "react";
import { NavLink as Link } from "react-router-dom";

let linkCorrente = {
  color: "#027399",
};

const Navegacao = () => {
  return (
    <ul>
      <li>
        <Link exact activeStyle={linkCorrente}>
          Home
        </Link>
      </li>
      <li>
        <Link exact activeStyle={linkCorrente}>
          Frontend
        </Link>
      </li>
      <li>
        <Link exact activeStyle={linkCorrente}>
          Programação
        </Link>
      </li>
      <li>
        <Link exact activeStyle={linkCorrente}>
          Design
        </Link>
      </li>
      <li>
        <Link exact activeStyle={linkCorrente}>
          Catálogo
        </Link>
      </li>
    </ul>
  );
};

export default Navegacao;
