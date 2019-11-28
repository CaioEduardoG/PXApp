import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";

const Main = ({colaboradores}) => {
  return (
    <div className="listaColaboradores">
      {colaboradores.map(colaborador => (
        <article key={colaborador.email}>
          <strong>{colaborador.nome}</strong>
          <Link to={`/colaboradores/${colaborador.email}`}>Ver Mais</Link>
        </article>
      ))}
      <a id="adicionar" href="/adicionarcolaborador">+</a>
    </div>
  );
}

export default Main;