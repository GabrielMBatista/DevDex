import firebase from 'firebase';
import React, { Component } from 'react';
import Lista from './Componentes/Lista';
import Detalhes from './Componentes/Detalhes';
import { Botaoabrir, BottomBars, Pokedex, Tela, TopBars } from './Componentes/Styled';
import Cadastro from './Componentes/FormCadastro';

class App extends Component {
  constructor() {
    super();
    this.state = {
      VisorAtivo: false,
      DevAtivo: false,
      Dados: [],
      usuarios: [],
      IdDeatlhes:[],
    }
  }


  componentDidMount() {
    const db = firebase.database();
    const dbRef = db.ref().child('users');
    dbRef.on('child_added', snap => {
      this.setState({
        Dados: snap.val()
      })
      let map = new Map(Object.entries(this.state.Dados));
      map.forEach(user => {
        this.setState(prevState => ({
          usuarios: [...prevState.usuarios, { user }]
        }))
      })
    })
  }


  AbrirVisor = () => {
    this.setState({
      VisorAtivo: !this.state.VisorAtivo
    })
    this.setState({
      DevAtivo: false
    });
  }
  AbrirPoke = (e) => {
    this.setState({
      IdDeatlhes: e.user
    });
    this.setState({
      DevAtivo: true
    });
    this.setState({
      VisorAtivo: false
    })
  }

  CarregarLista = () => {
    if (this.state.VisorAtivo) {
      return (<Lista Dados={this.state.Dados} AbrirPoke={this.AbrirPoke} usuarios={this.state.usuarios} />)
      // return(<Cadastro></Cadastro>)
    }
    else if (this.state.DevAtivo) {
      return (<Detalhes AbrirVisor={this.AbrirVisor} usuarios={this.state.usuarios} id={this.state.IdDeatlhes} />)
    }

    return (
      <Botaoabrir onClick={this.AbrirVisor} />

    )
  }

  render() {

    return (
      <Pokedex>
        <TopBars className='top-bar'></TopBars>
        <Tela>
          {this.CarregarLista()}
        </Tela>
        <BottomBars className='bottom-bar'></BottomBars>
      </Pokedex>
    );
  }
}



export default App;
