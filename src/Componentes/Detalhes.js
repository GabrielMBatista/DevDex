import React, { Component } from 'react';
import '../App.css';
import { Foto,Detalhesdev, Sobre, Sobremim, Grafico, Status, Contato, Botaovoltar, Botaoabrir } from './Styled';


export default class  Detalhes extends Component {
 
  render() {

    return (
      <Detalhesdev>
      <Foto >
        <label className='texto'>devnome.DevList</label>
        <label className='texto'></label>
        <div>
          <img className='moldura'  />
        </div>
      </Foto>
      <Sobre >
        <label className='texto'>Sobre</label>
        <Sobremim>
          Meta profissional é a excelência não importa em qual cargo começar o topo sempre é a minha meta. Finalizar o Curso Superior em Gestão de TI com o foco em chegar ao mestrado em informação e segurança cibernética.
        </Sobremim>
        <label className='texto'>Pontos Fortes</label>
        <div>
          <li>
            Soft Skills.
        </li>
          <li>
            Inglês intermediário para conversação e avançado para leitura.
        </li>
          <li>
            Extrema facilidade e adaptabilidade com situações complexas.
        </li>
          <li>
            Fácil absorção de conteúdo.
        </li>
          <li>
            Calma e foco em qualquer situação.
        </li>
        </div>
      </Sobre>
      <Grafico >
        <Status >
          <h3 className='texto'>Experiencia WebDev</h3>
          <label className='Stats'>Html</label>
          <label className='Stat1'> </label>
          <label className='Stats2'>Css</label>
          <label className='Stat2'></label>
          <label className='Stats3'>JS</label>
          <label className='Stat3'></label>
          <label className='Stats4'>React</label>
          <label className='Stat4'></label>
          <label className='Nivel'>Sênior </label>
          <label className='Nivel'>Pleno</label>
          <label className='Nivel'>Júnior </label>
          <label className='Nivel'>Estudante</label>
        </Status>
      </Grafico>
      <Contato >
        <label className='texto'>Contato</label>
        <a >
          <img className='imagencenter' />
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


