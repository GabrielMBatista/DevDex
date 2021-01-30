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
      Dados:'',
    }
  }

  componentDidMount() {
    const db = firebase.database();
    const dbRef = db.ref().child('Perfis');
    dbRef.on('value', snap => {

      this.setState({
        Dados: snap.val()
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
      return (<Cadastro/>)
    }
    // <Lista Dados={this.state.Dados} AbrirPoke={this.AbrirPoke}   
    // else if (this.state.DevAtivo) {
    //   return (<Detalhes AbrirVisor={this.AbrirVisor} />)
    // }

    return (
      <Botaoabrir onClick={this.AbrirVisor} />

    )
  }







  render() {
    return (
   <Pokedex>
        <TopBars className='top-bar'></TopBars>
        <Tela>
        {console.log('this.props.Dados >> ', this.state.Dados)}
          {this.CarregarLista()}
        </Tela>
        <BottomBars className='bottom-bar'></BottomBars>
      </Pokedex>
    );
  }
}



export default App;
