import React, { useState } from 'react';
import './styles.css';

const CriarColaborador = ({ onSubmit }) => {
  
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tribo, setTribo] = useState('')
  const [clientes, setClientes] = useState('')

  return (
    <div className="corpo" >
      <h1>Cadastrar Colaborador</h1>
      <form action=''>
        <strong>Nome: </strong>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite o nome"></input>
        <strong>Email: </strong>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite o email"></input>
        <strong>Tribo: </strong>
        <input type="text" value={tribo} onChange={e => setTribo(e.target.value)} placeholder="Digite a tribo"></input>
        <strong> Clientes: </strong>
        <input type="text" value={clientes} onChange={e => setClientes(e.target.value)} placeholder="Digite o(os) clientes. EX.: Cliente1;Cliente2;Cleinte3"></input>
        <div className='submit'>
          <button className='submit' onClick={() => onSubmit({ nome, email, tribo, clientes })} type='button'>Cadastrar</button>
        </div>
      </form>
    </div >
  );
};

export default CriarColaborador;