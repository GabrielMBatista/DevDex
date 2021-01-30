import React, { Component } from 'react';
import '../App.css';
import { Cardpokes, Telapokes } from './Styled';
import firebase from 'firebase';

export default class Lista extends Component {

  render() {
    let usuariosarray = this.props.usuarios
    return (
      <Telapokes>
        {usuariosarray.map((e) => {
          return (
            <Cardpokes key={e.user.id} onClick={() => this.props.AbrirPoke(e)}>
              <img src={e.user.foto}></img>
              <p className='texto'> {e.user.username}</p>
            </Cardpokes>
          )
        })}
      </Telapokes>
    )
  }
}