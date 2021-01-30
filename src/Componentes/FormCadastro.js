import firebase from 'firebase';
import '../App.css';
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'

const Cadastro1 = styled.div`
display:grid;
grid-template-columns:55% 45%;
justify-content:center;
justify-items:center;
align-items:center;
align-content:center;
text-align:center;
background-color:whitesmoke;
height: 65vh;
width:100%;
`


export default function Cadastro() {

  const [nome, setnome] = useState('')
  const [foto, setfoto] = useState('')
  const [descricao, setdescricao] = useState('')
  const [contato, setcontato] = useState('')
  const [linkedin, setlinkedin] = useState('')
  const [pontosF, setpontosF] = useState('')
  const [react, setreact] = useState(0)
  const [js, setjs] = useState(0)
  const [css, setcss] = useState(0)
  const [html, sethtml] = useState(0)



  function writeUserData() {
    firebase.database().ref(`users/${Date.now()}`).set({
      "id": {
        "username": nome,
        "contato": contato,
        "foto": foto,
        "descricao": descricao,
        "linkedin": linkedin,
        "pontosF": pontosF,
        "react": react,
        "js": js,
        "css": css,
        "html": html
      }
    });
    alert('Obrigado Pela Contribuição')
  }

  const inputname = (event) => {
    setnome(event.target.value)
  }
  const inputfoto = (event) => {
    setfoto(event.target.value)
  }
  const inputdesc = (event) => {
    setdescricao(event.target.value)
  }
  const inputcontato = (event) => {
    setcontato(event.target.value)
  }
  const inputlinkedin = (event) => {
    setlinkedin(event.target.value)
  }
  const inputpontosfortes = (event) => {
    setpontosF(event.target.value)
  }
  const inputReact = (event) => {
    setreact(event.target.value)
  }
  const inputJS = (event) => {
    setjs(event.target.value)
  }
  const inputCss = (event) => {
    setcss(event.target.value)
  }
  const inputHtml = (event) => {
    sethtml(event.target.value)
  }

  return (
    <Cadastro1>
      <div>
        <p>Nome</p>
        <input value={nome} onChange={inputname} type="Text"></input>
        <p>Url Foto.png</p>
        <input value={foto} onChange={inputfoto} type="Text"></input>
        <p>Linkedin Link</p>
        <input value={linkedin} onChange={inputlinkedin} type="Text"></input>
        <p>Pontos Fortes</p>
        <textarea value={pontosF} onChange={inputpontosfortes} type="Text"></textarea>
        <p>Email contato</p>
        <input value={contato} onChange={inputcontato} type="E-mail"></input>
      </div>
      <div>
        <p>Sobre </p>
        <textarea value={descricao} onChange={inputdesc} type="Text"></textarea>
        <p>Entre 0 e 10 Qual Seu nivel em</p>
        <p>React</p>
        <input value={react} onChange={inputReact} min="0" max="10" type="number"></input>
        <p>Java Script</p>
        <input value={js} onChange={inputJS} min="0" max="10" type="number"></input>
        <p>Css</p>
        <input value={css} onChange={inputCss} min="0" max="10" type="number"></input>
        <p>Html</p>
        <input value={html} onChange={inputHtml} min="0" max="10" type="number"></input>
      </div>
      <button onClick={writeUserData}>Enviar</button>
    </Cadastro1>
  )

}



