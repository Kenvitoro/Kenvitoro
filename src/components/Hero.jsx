import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'


export const Hero = () => {

  const ClickContact = () =>{
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" })
  }

    const [isMobile, setIsMobile] = useState(false);

    const checkIfMobile = () => {
      const isMobile = window.innerWidth <= 768; 
      setIsMobile(isMobile);
    };
  
    useEffect(() => {
      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);
  
      return () => {
        window.removeEventListener('resize', checkIfMobile);
      };
    }, []);

  return (
    <Section id="Hero">
        <Container>
            <Left>
                <Title>Kenneth Mora Villatoro</Title>
                <Subtitle>
                    <Line src='./img/line.png'/>
                    <Tecnologies>
                    Desarrollador Web / Javascript / React / Css / Node 
                    </Tecnologies>
                </Subtitle>
                
                <Description>Entusiasta de la programación y de todas sus ramificaciones, siempre en busca de nuevas oportunidades y retos.</Description>
                
                <Button onClick={ClickContact}>Contactame</Button>
            </Left>
            <Right>
            {isMobile ? <MovilShape /> 
            : <Canvas>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={1} />
                    <mesh>
                    <Sphere args={[1, 100, 200]} scale={1.9} >
                    <MeshDistortMaterial color="#4ea93b" attach="material" distort={0.5} speed={2}/>
                    </Sphere>
                    </mesh>
                </Canvas>}
                
                <Img src="./img/dev.png"/>
            </Right>
        </Container>
    </Section>
  )
}




const MovilShape = styled.div`
background: linear-gradient(45deg, #4ea93b 0%, #4b7f18 100%);
  animation: morph 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  max-height: 400px;
  max-width: 400px;
  min-height: 300px;
  min-width: 300px;
  transition: all 1s ease-in-out;

  @keyframes morph {
  0% {
			border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
	} 
	
	50% {
			border-radius:  30% 60% 70% 40% / 50% 60% 30% 60%;
	}
  
	100% {
		border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
	} 
}
`


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
align-items: center;
justify-content: center;
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
@media only screen and (max-width: 1024px) {
    width: 100%;
}

@media only screen and (min-width: 601px) and (max-width: 1023px) {
    height: auto;
    grid-template-columns: 1fr;
}

@media only screen and (max-width: 600px) {
    height: auto;
    grid-template-columns: 1fr;
}
`
const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 15px;
padding-left: 30px;
@media only screen and (max-width: 1024px) {
    align-items: center;
    padding-left: 10px;
  }

  @media only screen and (min-width: 601px) and (max-width: 1023px) {
    width: 100vw;
    order: 1;
    height: 50vh;
}

@media only screen and (max-width: 600px) {
    order: 1;
    height: 40vh;
}
`

const Title = styled.div`
font-size: calc(1em + 2.5vw);
&::first-letter{
    font-size: calc(1em + 3vw);
    color: #4ea93b;
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
const Tecnologies = styled.div`
color: #3c7d3e;
`
const Description = styled.div`
font-size: calc(0.5em + 1vh);
@media only screen and (max-width: 1024px) {
    text-align: center;
  }
`
const Button = styled.div`
background-color: #4ea93b;
padding: 10px;
border-radius: 10% / 30% ;
text-align: center;
width: fit-content;
&:hover{
    background-color: #3c7d3e;
}
&:active{
    transform: scale(0.95);
    user-select: none;
}
`
const Right = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
@media only screen and (min-width: 601px) and (max-width: 1023px) {
    height: 50vh;
    width: 100vw;
}

@media only screen and (max-width: 600px) and (orientation: portrait) {
    height: 65vh;
}
@media only screen and (max-width: 600px) and (orientation: landscape) {
    height: 120vh;
    background-color: blue;
}
`

const Img = styled.img`
max-width: 500px;
min-width: 300px;
animation: animate 2s infinite ease alternate;
position: absolute;
margin-bottom: 20px;


@keyframes animate {
    to{
        transform: translateY(20px);
    }
}

@media only screen and (max-width: 1024px) {
    max-width: 50%;
  }
`






{/*

@media only screen and (max-width: 600px) {
  
}


@media only screen and (min-width: 601px) and (max-width: 1024px) {
  
}


@media only screen and (min-width: 1025px) {
  
} */}