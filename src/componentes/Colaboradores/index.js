import React from 'react';
import "./style.css";

const Colaboradores = ({colaborador}) => {
  return (
    <div className="info-colaborador">
     <h1>{colaborador.nome}</h1>
     <p><b>Email:</b> {colaborador.email}</p>
     <p><b>Tribo:</b> {colaborador.tribo}</p>
     <p><b>Clientes:</b> {colaborador.clientes}</p>
    </div>
  );  
};

export default Colaboradores;