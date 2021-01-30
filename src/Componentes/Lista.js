import React, { Component } from 'react';
import '../App.css';
import { Cardpokes, Telapokes } from './Styled';


export default class Lista extends Component {
 
  render() {

    return (
      <Telapokes>
      <Cardpokes onClick={this.props.AbrirPoke}>
       </Cardpokes>
      <Cardpokes onClick={this.props.AbrirPoke}>
      TESTE
      </Cardpokes>
      <Cardpokes onClick={this.props.AbrirPoke}>
      TESTE
      </Cardpokes>
    </Telapokes>
    )
  }
}



