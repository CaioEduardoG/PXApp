import React, { Component } from 'react';
import AddColaborador from "../../componentes/AdicionarColaborador";
import Api from "../../servicos/api";

export default class Main extends Component {

  cadastrarColaborador = (colaborador) => {

    var clientes = colaborador.clientes.split('-');

    var _clientes = [];

    clientes.forEach(e => {
      var cliente = {
        nome: e
      }
      _clientes.push(cliente)
    });

    var obj = {
      nome: colaborador.nome,
      email: colaborador.email,
      tribo: colaborador.tribo,
      clientes: _clientes
    };

    Api.post('/colaboradores', obj).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <AddColaborador onSubmit={this.cadastrarColaborador} />
      </div>
    );
  }
}


