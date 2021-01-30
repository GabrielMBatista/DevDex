import React, { Component } from 'react';
import '../App.css';
import linkedimg from '../img/linkedin.png'
import { Foto, Detalhesdev, Sobre, Sobremim, Grafico, Status, Contato, Botaovoltar, Botaoabrir } from './Styled';


export default class Detalhes extends Component {
  state = {
    Detalhes: this.props.id,
  }



  mostrarDetalhes = () => {
    if (this.props.id === '') {
      return (
        this.props.AbrirVisor()
      )

    }
    else {
      <p>{this.props.id}</p>
    }

  }



  render() {
    console.log('this.props.user >> ', this.state.Detalhes)
    return (
      <Detalhesdev>
        {this.mostrarDetalhes()}
        <Foto >
          <label className='texto'>{this.state.Detalhes.username}</label>
          <img className='moldura' src={this.state.Detalhes.foto} />
        </Foto>
        <Sobre >
          <label className='texto'>Sobre</label>
          <Sobremim>
            {this.state.Detalhes.descricao}
          </Sobremim>
          <label className='texto'>Pontos Fortes</label>
          <div>
            <p>
              {this.state.Detalhes.pontosF}
            </p>
            <p>
              {this.state.Detalhes.pontosF2}
            </p>
            <p>
              {this.state.Detalhes.pontosF3}
            </p>
          </div>
        </Sobre>
        <Grafico >
          <Status >

          </Status>
        </Grafico>
        <Contato >
          <label className='texto'>Contato</label>
          <p>{this.state.Detalhes.contato}</p>
          <a href={this.state.Detalhes.linkedin}>
          <img src={linkedimg} />
          </a>
        </Contato>
        <Botaovoltar>
          <Botaoabrir onClick={this.props.AbrirVisor}>
            Voltar
      </Botaoabrir>
        </Botaovoltar>
      </Detalhesdev>
    );
  }
}


