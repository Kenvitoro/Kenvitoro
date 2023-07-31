import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';



export const Navbar = () => {


  const ClickInicio = () =>{
    document.getElementById("Hero").scrollIntoView({ behavior: "smooth" })
    if(window.innerWidth < 600){
      MenuResponsive.current.style.transform = "translateX(70vw)"
    }
  }

  const ClickAbout = () =>{
    document.getElementById("About").scrollIntoView({ behavior: "smooth" })
    if(window.innerWidth < 600){
      MenuResponsive.current.style.transform = "translateX(70vw)"
    }
  }
  
  const ClickPortfolio = () =>{
    document.getElementById("Portfolio").scrollIntoView({ behavior: "smooth" })
    if(window.innerWidth < 600){
      MenuResponsive.current.style.transform = "translateX(70vw)"
    }
  }
  
  const ClickContact = () =>{
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" })
    if(window.innerWidth < 600){
      MenuResponsive.current.style.transform = "translateX(70vw)"
    }
  }

  const MenuResponsive = useRef()

  const menuClick = () =>{
      MenuResponsive.current.style.transform = "translateX(0vw)"
  
  }




  return (
    <Section>
        <Container>
            <Links>
                <LogoContainer>
                  <Logo src='./img/kenvitoro-subtitle.png'/>
                </LogoContainer>
                <FontAwesomeIconStyled  icon={faBars}  onClick={menuClick}/> 
                <List ref={MenuResponsive}>
                    <ListItem onClick={ClickInicio}>Inicio</ListItem>
                    <ListItem onClick={ClickAbout} >Sobre mi</ListItem>
                    <ListItem onClick={ClickPortfolio} >Portfolio</ListItem>
                    <ListItem onClick={ClickContact} >Contacto</ListItem>
                </List>
            </Links>
        </Container>
    </Section>
  )
}

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
color: white;
display: none;
position: absolute;
top: 0;
right: 0;
margin: 18px 30px 0 0;
height: 4vh;
@media only screen and (max-width: 600px) {
  display: unset;
}
`;

const Section = styled.div`
display: flex;
justify-content: center;
scroll-snap-align: center;
@media only screen and (max-width: 1024px) {
    scroll-snap-align: unset;
}
@media only screen and (min-width: 601px) and (max-width: 1023px) {
  scroll-snap-align: unset;
}
@media only screen and (max-width: 600px) {
  scroll-snap-align: unset;
  width: 100%;
  background-color: rgba(30, 0, 62, 0.9);
  backdrop-filter: blur(5px);
  position: fixed;
  z-index: 9;
  overflow: unset;
  height: 65px;
}
`
const Container = styled.div`
padding-top: 20px;
width: 1400px;
@media only screen and (max-width: 1024px) {
    width: 95%;
    max-height: 8vh;
  }

@media only screen and (max-width: 600px) {
  max-height: 100%;
  padding-top: 12px;
}
`

const Links = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
@media only screen and (max-width: 600px) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
`
const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: start;
`

const Logo = styled.img`
min-width: 10%;
max-width: 100px;
object-fit: contain;
@media only screen and (min-width: 1024px) {
   margin-left: 25px;
  }
@media only screen and (max-width: 600px) {
  padding-bottom: 80px;
}
`
const List = styled.ul`
display:flex;
list-style: none;
justify-content: space-around;
align-items: center;

@media only screen and (max-width: 600px) {
  padding: 165px 0;
  position: absolute;
  top: 0;
  right: 0;
  width: 70vw;
  gap: 45px;
  background-color: rgba(30, 0, 62, 0.8);
  backdrop-filter: blur(5px);
  flex-direction: column;
  justify-content: start;
  height: 100vh;
  z-index: 999;
  transform: translateX(70vw);
  transition: transform 0.5s ease;
}
`

const ListItem = styled.li`
color: #fff;
cursor: pointer;
user-select: none;
transition: 0.3s ease;
&:hover{
color: #4ea93b;
transform: scale(1.1);
}
&:active{
transform: scale(0.9);
}
`