import React from "react";
import { Link } from "react-router-dom";

const Frontend = ({ livros }) => {
  return (
    <main className="principal">
      <h2>Categoria Frontend</h2>
      {livros
        .filter((livro) => livro.categoria === "frontend")
        .map((livro) => {
          return (
            <div className="card" key={livro.id}>
              <div className="thumb">
                <img
                  src={`/imagens/capas/${livro.id}.jpg`}
                  alt="Thumbnail da cpa do livro"
                />
              </div>
              {livros
                .filter((c) => c.slug === livro.slug)
                .map((livro) => {
                  return (
                    <span key={livro.slug}>
                      <Link to={`/livro/${livro.slug}`}>
                        {
                          <div className="detalhes">
                            <h3>{livro.titulo}</h3>
                            <p>{livro.descricao.slice(0, 130) + "..."}</p>
                            <p>Leia mais &gt;</p>
                          </div>
                        }
                      </Link>
                    </span>
                  );
                })}
            </div>
          );
        })}
    </main>
  );
};

export default Frontend;
