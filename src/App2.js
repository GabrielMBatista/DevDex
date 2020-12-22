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
border-radius: 40px 40px 0 0;
border-bottom: 2px solid black;
`;
const BottomBars = styled.div`
border-radius: 0 0 40px 40px;
border-top: 3px solid black;
`;
const Pokedex = styled.div`
display: flex;
flex-direction: column;
max-width: 75vw;
height: 95vh;
margin: auto;
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
grid-template-columns: repeat(3,1fr);
justify-content: space-around;
align-items: center;

`;
const Cardpokes = styled.section`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 2rem 1rem;
margin: 7%;
border-radius: 15%;
background-color: #CCDDE2;
&:hover {
  background-color: #93A3BC;
};
hidden
`;

const Detalhes = styled.section`
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 30vh 35vh 10vh;
align-items: center;
width: 99%;
height: 75vh;
`
const Foto = styled.div`
color: black;
grid-row: 1;
width: 99%;
height: 100%;
`
const Sobre = styled.div`
color: black;
grid-row: 1 / 3;
grid-column: 2 / 2;
width: 100%;
height: 100%;;
`
const Grafico = styled.div`
color: black;
grid-row: 2;
grid-column: 1;
width: 99%;
height: 100%;
`
const Contato = styled.div`
color: black;
grid-row: 3 / 4;
grid-column: 1;
width: 99%;
height: 100%;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VisorAtivo: false,
      PokeAtivo: false,
      Usuarios: [{
        Foto: poke1,
        Nome: 'teste',
        Id: '001'
      },
      {
        Foto: poke2,
        Nome: 'teste',
        Id: '002'
      },
      {
        Foto: poke3,
        Nome: 'teste',
        Id: '003'
      },
      {
        Foto: poke4,
        Nome: 'teste',
        Id: '004'
      },
      {
        Foto: poke5,
        Nome: 'teste',
        Id: '005'
      },
      {
        Foto: poke6,
        Nome: 'teste',
        Id: '006'
      },
      {
        Foto: poke7,
        Nome: 'teste',
        Id: '007'
      },
      {
        Foto: poke8,
        Nome: 'teste',
        Id: '008'
      },
      {
        Foto: poke9,
        Nome: 'teste',
        Id: '009'
      },]
    }
  }



  AbrirVisor = () => {
    this.setState({
      VisorAtivo: !this.state.VisorAtivo
    })
  }
  AbrirPoke = () => {
    this.setState({
      VisorAtivo: !this.state.PokeAtivo
    })
  }

  CarregarLista = () => {
    if (condition) {
      
    }
   this.state.Usuarios.forEach(element => {
     return (
        <Telapokes >
          <Cardpokes onClick={this.AbrirPoke}>
            <img src={poke1} />
            <label >teste</label>
            <label >001</label>
          </Cardpokes>
          </Telapokes>

      )
   }); 
    
  
    return (
      <Botaoabrir
        onClick={this.AbrirVisor}>
      </Botaoabrir>
    )
  }

  CarregarDetalhes = () => {
    if (this.state.PokeAtivo) {
      return (
        <Cardpokes>
          ahuiaeri
        </Cardpokes>
      )
    }
    return (
      <Cardpokes>
        <label >teste</label>
        <label >001</label>
      </Cardpokes>
    )

  }



  render() {
    return (
      <Pokedex>
        <TopBars className='top-bar'></TopBars>
        <Tela>
          {/* {this.CarregarDetalhes()} */}
          {this.CarregarLista()}
        </Tela>
        <BottomBars className='bottom-bar'></BottomBars>
      </Pokedex>
    );
  }
}


export default App;
