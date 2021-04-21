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
margin: auto;
margin-top: 1%;
@media (min-width:100px) {
    width:auto;
    height:50vh;
  };
  @media (min-width:1000px) {
    width:50vw;
    height:70vh;
    font-size:1.3em;
  };
  @media (min-width:1200px) {
    width:40vw;
    height:70vh;
    font-size:1.5em;
  };
 
`


export const Botaoabrir = styled.button`
background-color: white;
border: 8px solid #b4e5ec;
border-radius: 50%;
position: absolute;
outline: none;
&:hover {
  background-color: #372A34;
};
@media (min-width:100px) {
width:70px;
height:70px;
};
  @media (min-width:1000px) {
    width:110px;
    height:110px;
    margin-left: 10%;
    margin:  3% 0% 0% -2vw ;
  }; 
   @media (min-width:1200px) {
    width:100px;
    height:100px;
    margin-left: 10%;
    margin:  0% 0% 0% -1vw ;
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
width:auto;
z-index:100;
`
export const Telapokes = styled.section`
display: grid;
grid-template-columns: repeat(3,25fr);
grid-template-rows: repeat(3,20fr);
align-items: center;
justify-content: space-around;
align-items: center;
width:auto;
height: 75vh;
overflow:scroll;
overflow-x:hidden;
`

export const Cardpokes = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
text-align: center;
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
overflow:scroll;
overflow-x:hidden;
`
export const Sobremim = styled.div`
display:flex;
color: black;
width: 99%;
height: auto;
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
@media (min-width:100px) {
margin-left: 10%;
margin:  550% 0% 0% -10vw ;
width: 40%;
};
  @media (min-width:1000px) {
    margin-left: 10%;
margin:  20% 0% 0% -2vw ;
  };
`
