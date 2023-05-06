import React from 'react'
import styled from 'styled-components'
import { Card } from './Card'


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 1024px) {
    scroll-snap-align: unset;
}
@media only screen and (min-width: 601px) and (max-width: 1023px) {
  scroll-snap-align: unset;
}
@media only screen and (max-width: 600px) {
  scroll-snap-align: unset;
}
`
const Container = styled.div`
padding-top: calc(1em + 5vh);
height: 100vh;
max-width: 1400px;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
@media only screen and (max-width: 1024px) {
  padding-top: 20px;
}
@media only screen and (min-width: 601px) and (max-width: 1023px) {
  padding-top: 80px;
}
@media only screen and (max-width: 600px) {
  padding-top: 60px;
}
`
const Title = styled.h1`
font-size: calc(1em + 6.5vh);
&::first-letter{
    font-size: calc(1em + 3vw);
    color: #4ea93b;
}
@media only screen and (max-width: 600px) {
  font-size: calc(1em + 3vw);
&::first-letter{
  font-size: calc(1em + 6.5vw);
    color: #4ea93b;
}
}
`
const Projects = styled.div`
width: 95%;
min-height: 50vh;
max-height: 70vh;
overflow-y: auto;
scrollbar-width: 0;
display: grid;
padding: 30px 30px;
border: 0.5px solid rgba(0, 0, 0, 0.2);
box-shadow: 0px 25px 55px rgba(0, 0, 0, 0.1);
border-radius: 50px;
grid-template-columns: repeat(5, 1fr);
gap: 30px;
scrollbar-width: none;
&::-webkit-scrollbar{
  display: none;
}
@media only screen and (max-width: 1024px) {
grid-template-columns: repeat(3, 1fr);
width: 80%;
height: 70vh;
}
@media only screen and (min-width: 601px) and (max-width: 1023px) {
grid-template-columns: repeat(2, 1fr);
width: 80%;
}
@media only screen and (max-width: 600px) {
  grid-template-columns: 1fr;
}
`


export const Works = () => {
  return (
    <Section id="Portfolio">
      <Container>
        <Title>
          Proyectos
        </Title>
        <Projects>
          <Card title={"Noaj"} 
          subTitle={"Abogacia"} 
          description={"Html, Css, Javascript, responsive desing"} 
          image={"public/img/noaj.png"}
          address={"https://noajmora.web.app/"}
          />

          <Card title={"Just Kreate"} 
          subTitle={"Fotografia"} 
          description={"Html, Css, Javascript, responsive desing"} 
          image={"public/img/just-kreate.png"}
          address={"https://kenvitoro.github.io/Just-Kreate/"}
          />
         
        </Projects>

      </Container>
    </Section>
  )
}
