import React, { Component } from 'react';
import Healthcheck from "../../componentes/Healthcheck";


export default class main extends Component {  
  render() {
    return (
      <div className="listaColaboradores">
        <Healthcheck  />
      </div>
    );
  }
}