import React, { Component } from 'react';
import './App.css';
import styled from "styled-components";


const poke1 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
const poke2 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
const poke3 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
const poke4 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
const poke5 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'
const poke6 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
const poke7 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
const poke8 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'
const poke9 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png'

const TopBars = styled.div`

border-radius: 50px 50px 0 0;
border-bottom: 2px solid black;
min-height: 11VH;
max-height: 40VH;
`;
const BottomBars = styled.div`
border-radius: 0 0 40px 40px;
border-top: 3px solid black;
min-height: 10VH;
max-height: 40VH;
`;
const Pokedex = styled.div`
display: flex;
flex-direction: column;
max-width: 75vw;
height: 90vh;
margin: auto;
margin-top: 1%;
`;

const Botaoabrir = styled.button`
background-color: white;
border: 8px solid #b4e5ec;
border-radius: 50%;
width: 120px;
height: 120px;
position: absolute;
outline: none;
&:hover {
  background-color: #372A34;
};
`;

const Tela = styled.section`
display: flex;
justify-content: center;
align-items: center;
background-color: #e0f5fe94;
border-right: 5px solid white;
border-left: 5px solid white;
position: relative; 
padding: 0.5px
`;
const Telapokes = styled.section`
display: grid;
grid-template-columns: repeat(3,25vw);
justify-content: space-around;
align-items: center;
`;

const Cardpokes = styled.section`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 1rem 1rem;
margin: 2%;
border-radius: 20%;
background-color: #CCDDE2;
&:hover {
  background-color: #93A3BC;
};
hidden
`;

const Detalhes = styled.section`
display: grid;
justify-content: space-around;
align-items: center;
grid-template-columns: 48% 2% 48%;
grid-template-rows: 30vh 35vh 10vh;
align-items: center;
width: 99%;
height: 72vh;
`
const Status = styled.section`
display: grid;
grid-row: repeat(6,2vh);
grid-template-columns: repeat(5,1fr);
justify-content: space-around;
align-items: center;
width: 100%;
height: 100%;
`;

const Foto = styled.div`
color: black;
grid-row: 1;
width: 99%;
height: 100%;
`
const Sobre = styled.div`
color: black;
grid-row: 1 / 4;
grid-column: 3 / 3;
width: 100%;
height: 100%;;
`
const Grafico = styled.div`
color: black;
grid-row: 2;
grid-column: 1;
width: 99%;
height: 100%;
align-items: center;
background-color: #93A3BC;
border-radius: 10%;
`
const Contato = styled.div`
color: black;
grid-row: 3 / 4;
grid-column: 1;
width: 99%;
height: 100%;
`
const Botaovoltar = styled.div`
color: black;
grid-row: 3 / 4;
grid-column: 2;
width: 99%;
height: 100%;
margin: 3vh -4vw ;
`;





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VisorAtivo: false,
      PokeAtivo: false,
    }
  }



  AbrirVisor = () => {
    this.setState({
      VisorAtivo: !this.state.VisorAtivo
    })
    this.setState({
      PokeAtivo: false
    });
  }
  AbrirPoke = () => {
    this.setState({
      PokeAtivo: true
    });
    this.setState({
      VisorAtivo: false
    })
  }

  CarregarLista = () => {
    if (this.state.VisorAtivo) {
      return (
        null
      )
    }
    else if (this.state.PokeAtivo) {
      return (
        null
      )
    }

    return (
      <Botaoabrir
        onClick={this.AbrirVisor}>
      </Botaoabrir>
    )
  }

  render() {
    const detalhes = this.state.PokeAtivo && (
      <Detalhes>
        <Foto >
          <img src={poke1} />
        </Foto>
        <Sobre >
          <label className='texto'>Sobre</label>
          <label className='texto'>Pontos Fortes</label>
          <label className='texto'>Pontos Fracos</label>
        </Sobre>
        <Grafico >
          <Status >
            <h3 className='texto'>Experiencia WebDev</h3>
            <label className='Stats'>Html</label>
            <label className='Stat1'> </label>
            <label className='Stats2'>Css</label>
            <label className='Stat2'></label>
            <label className='Stats3'>JavaScript</label>
            <label className='Stat3'></label>
            <label className='Stats4'>React</label>
            <label className='Stat4'></label>
            <label className='Nivel'>Sênior </label>
            <label className='Nivel'>Pleno</label>
            <label className='Nivel'>Júnior </label>
            <label className='Nivel'>Estudante </label>
          </Status>
        </Grafico>
        <Contato >
          <label className='texto'>Contato</label>
        </Contato>
        <Botaovoltar>
          <Botaoabrir onClick={this.AbrirVisor}>
            Voltar
          </Botaoabrir>
        </Botaovoltar>
      </Detalhes>
    );

    const lista = this.state.VisorAtivo && (
      <Telapokes >
        <Cardpokes onClick={this.AbrirPoke} >
          <img src={poke1} />
          <label >teste</label>
          <label >001</label>
        </Cardpokes>
        <Cardpokes onClick={this.AbrirPoke}>
          <img src={poke2} />
          <label >teste</label>
          <label >002</label>
        </Cardpokes>
        <Cardpokes onClick={this.AbrirPoke}>
          <img src={poke3} />
          <label >teste</label>
          <label >003</label>
        </Cardpokes>
        <Cardpokes onClick={this.AbrirPoke}>
          <img src={poke4} />
          <label >teste</label>
          <label >004</label>
        </Cardpokes>
        <Cardpokes onClick={this.AbrirPoke}>
          <img src={poke5} />
          <label >teste</label>
          <label >005</label>
        </Cardpokes>
        <Cardpokes onClick={this.AbrirPoke}>
          <img src={poke6} />
          <label >teste</label>
          <label >006</label>
        </Cardpokes>
        <Cardpokes onClick={this.AbrirPoke}>
          <img src={poke7} />
          <label >teste</label>
          <label >007</label>
        </Cardpokes>
        <Cardpokes onClick={this.AbrirPoke}>
          <img src={poke8} />
          <label >teste</label>
          <label >008</label>
        </Cardpokes>
        <Cardpokes onClick={this.AbrirPoke}>
          <img src={poke9} />
          <label >teste</label>
          <label >009</label>
        </Cardpokes>
      </Telapokes>
    )
    return (
      <Pokedex>
        <TopBars className='top-bar'></TopBars>
        <Tela>
          {this.CarregarLista()}
          {lista}
          {detalhes}
        </Tela>
        <BottomBars className='bottom-bar'></BottomBars>
      </Pokedex>
    );
  }
}



export default App;
