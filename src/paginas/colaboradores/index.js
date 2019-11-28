import React, { Component } from 'react';
import Api from "../../servicos/api";
import Colaboradores from '../../componentes/Colaboradores'

export default class colaboradores extends Component {

  state = {
    colaboradores: [],
    colaborador: {}
  }

  componentDidMount = async() => {
    const { id } = this.props.match.params;
    const resposta = await Api.get(`/colaboradores`);
    this.setState({
      colaboradores: resposta.data.Items
    });

    const found = this.state.colaboradores.find(element => element.email === id);
    this.setState({
      colaborador: found
    })
  }

  render() {
    return (
      <div>
        <Colaboradores colaborador={this.state.colaborador}/>
      </div >
    );
  }
}