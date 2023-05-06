import React from 'react'
import styled from 'styled-components'
import { Cube } from './Cube'
import { BallsContainer } from './BallsContainer'


export const Who = () => {
  return (
    <Section id="About">
    <Container>
        <Left>
            <Cube/>
        </Left>
        <Right>
        <Title>Conocimientos</Title>
                <Subtitle>
                    <Line src='/img/line.png'/>
                    <Definition>
                    FullStack 
                    </Definition>
                </Subtitle>
                <Description>Desarrollador web con enfoque tanto en Frontend como en Backend. En el Frontend, he trabajado con JavaScript, React, CSS y SCSS para crear aplicaciones web interactivas y atractivas. En el Backend, he trabajado con Node y PostgreSQL para desarrollar aplicaciones web del lado del servidor. Estoy siempre buscando oportunidades para mejorar mis habilidades y estar al día con las últimas tendencias en el desarrollo web.</Description>
                <BallsContainer/>
        </Right>
    </Container>
</Section>
  )
}



const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
place-items: center;
flex-direction: column;
@media only screen and (max-width: 1024px) {
    height: auto;
    scroll-snap-align: unset;
}
@media only screen and (min-width: 601px) and (max-width: 1023px) {
  height: auto;
  scroll-snap-align: unset;
}
@media only screen and (max-width: 600px) {
  height: auto;
  scroll-snap-align: unset;
}
`
const Container = styled.div`
height: 100vh;
max-width: 1400px;
scroll-snap-align: center;
display: grid;
grid-template-columns: 1fr 1fr;
@media only screen and (min-width: 601px) and (max-width: 1023px) {
  scroll-snap-align: unset;
  height: 110vh;
  grid-template-columns: 1fr;
}
@media only screen and (max-width: 600px) {
  padding-top: 60px;
  scroll-snap-align: unset;
  height: auto;
  grid-template-columns: 1fr;
}
`

const Left = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media only screen and (min-width: 601px) and (max-width: 1023px) {
    height: 50vh;
}
@media only screen and (max-width: 600px){
    height: 50vh;
}
`

const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 15px;
padding-right: 30px;
@media only screen and (max-width: 1024px) {
    padding: 0 18px 0 18px;
    align-items: center;
}

@media only screen and (min-width: 601px) and (max-width: 1023px) {
    height: 60vh;
}
`

const Title = styled.div`
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
const Subtitle = styled.div`
display: flex;
align-items: center;
gap: 15px;
`
const Line = styled.img`
height: 7px;
`
const Definition = styled.div`
color: #3c7d3e;
`
const Description = styled.div`
font-size: calc(0.5em + 1vh);
@media only screen and (max-width: 1024px) {
    text-align: justify;
}
`

