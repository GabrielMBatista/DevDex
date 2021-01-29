import { FirebaseDatabaseProvider } from "@react-firebase/database";
import React, { Component } from 'react';
import Lista from './Componentes/Lista';
import Detalhes from './Componentes/Detalhes';
import { Botaoabrir, BottomBars, Pokedex, Tela, TopBars } from './Componentes/Styled';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VisorAtivo: false,
      DevAtivo: false,
    }
  }

  AbrirVisor = () => {
    this.setState({
      VisorAtivo: !this.state.VisorAtivo
    })
    this.setState({
      DevAtivo: false
    });
  }
  AbrirPoke = () => {
    console.log('Pegou :>> ');
    this.setState({
      DevAtivo: true
    });
    this.setState({
      VisorAtivo: false
    })
  }

  CarregarLista = () => {
    if (this.state.VisorAtivo) {
      return (<Lista AbrirPoke={this.AbrirPoke} />)
    }
    else if (this.state.DevAtivo) {
      return (<Detalhes AbrirVisor={this.AbrirVisor} />)
    }

    return (
      <Botaoabrir onClick={this.AbrirVisor} />

    )
  }

  render() {
    return (
      <FirebaseDatabaseProvider>
        <Pokedex>
          <TopBars className='top-bar'></TopBars>
          <Tela>
            {this.CarregarLista()}
          </Tela>
          <BottomBars className='bottom-bar'></BottomBars>
        </Pokedex>
      </FirebaseDatabaseProvider>
    );
  }
}



export default App;
