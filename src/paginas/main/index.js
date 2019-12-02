import React, { Component } from 'react';
import Api from "../../servicos/api";
import Main from "../../componentes/Main";

export default class main extends Component {

  state = {
    colaboradores: []
  };

  componentDidMount() {
    this.carregaColaboradores();
  };

  carregaColaboradores = async () => {
    const resposta = await Api.get('/api/colaboradores');
    console.log(resposta);
    this.setState({
      colaboradores: resposta.data.Items
    });
  };

  render() {
    const { colaboradores } = this.state;

    return (      
      <div className="listaColaboradores">
        <Main colaboradores={colaboradores}/>
      </div>
    );
  }
}


