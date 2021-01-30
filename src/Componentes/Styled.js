import '../App.css';
import styled from "styled-components";

export const TopBars = styled.div`
border-radius: 50px 50px 0 0;
border-bottom: 2px solid black;
min-height: 11VH;
max-height: 40VH;
`
export const BottomBars = styled.div`
border-radius: 0 0 40px 40px;
border-top: 3px solid black;
min-height: 10VH;
max-height: 40VH;
`
export const Pokedex = styled.div`
display: flex;
flex-direction: column;
max-width: 55vw;
height: 95vh;
margin: auto;
margin-top: 1%;
`

export const Botaoabrir = styled.button`
background-color: white;
border: 8px solid #b4e5ec;
border-radius: 50%;
width: 100px;
height: 100px;
position: absolute;
outline: none;
&:hover {
  background-color: #372A34;
};
`

export const Tela = styled.section`
display: flex;
justify-content: center;
align-items: center;
background-color: #e0f5fe94;
border-right: 5px solid white;
border-left: 5px solid white;
padding: 0.5px;
max-height:75vh;
max-width: 75vw;
z-index:100;
`
export const Telapokes = styled.section`
display: grid;
grid-template-columns: repeat(3,25fr);
grid-template-rows: repeat(3,20fr);
align-items: center;
justify-content: space-around;
align-items: center;
max-width: 65vw;
height: 75vh;
overflow:scroll;
overflow-y:hidden;
`

export const Cardpokes = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 92%;
height: 93%;
margin-left: 4%;
border-radius: 20%;
background-color: #CCDDE2;
&:hover {
  background-color: #93A3BC;}`;


export const Detalhesdev = styled.section`
display: grid;
justify-content: space-around;
align-items: center;
justify-content: center;
grid-template-columns: 48% 2% 48%;
grid-template-rows: 25vh 35vh 15vh;
width: 99%;
height: 75vh;
`
export const Status = styled.section`
display: grid;
grid-row: repeat(6,2vh);
grid-template-columns: repeat(5,1fr);
justify-content: space-around;
align-items: center;
width: 99%;
height: 99%;
`

export const Foto = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align:center;
color: black;
grid-row: 1;
width: 99%;
height: 95%;

`
export const Sobre = styled.div`
color: black;
grid-row: 1 / 3;
grid-column: 3 / 3;
width: 99%;
height: 95%;
align-items: center;
flex-direction: column;
justify-content: space-around;
justify-items:center;
font-size:1.6ch;
`
export const Sobremim = styled.div`
display:flex;
color: black;
width: 99%;
height: 55%;
/* font-size:1.6ch; */
text-indent: 0; 
padding:4%;
`
export const Grafico = styled.div`
color: black;
grid-row: 2;
grid-column: 1;
width: 99%;
height: 80%;
align-items: center;
background-color: #93A3BC;
border-radius: 8%;
`
export const Contato = styled.div`
display:flex;
color: black;
grid-row: 3 / 4;
grid-column: 1;
width: 99%;
height: 99%;
flex-direction: column;
justify-content: center;

`
export const Botaovoltar = styled.div`
color: black;
grid-row: 3 / 4;
grid-column: 2;
margin-left: 10%;
margin:  250% 0% 0% -4vw ;
`
