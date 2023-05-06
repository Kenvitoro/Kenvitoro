import React from 'react'
import styled from 'styled-components'



const Title = styled.h2`
position: relative;
color: white;
padding: 0 0 5px 0;
&::after{
    content: "";
    position: absolute;
    left: -15px;
    bottom: 0;
    width: 70%;
    height: 4px;
    background-color: #4ea93b ;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
}
`

const CardContainer = styled.div`
box-sizing: border-box;
height: 70%;
width: 100%;
display: flex;
padding: 0 15px 0 15px;
flex-direction: column;
gap: 10px;
background: linear-gradient(to top,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.1)
  );
  transform: translateY(80%);
  transition: transform 0.8s ease;
  transition-delay: 0.5s;
`


const Cardd = styled.div`
height: 270px;
border-radius: 7px;
display: flex;
align-items: end;
background-size: cover;
overflow: hidden;
box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.5) inset;
transition: transform 0.5s ease;

&:hover{
  transform: scale(1.05);

  ${Title}::after {
  transform: scaleX(1);
}

  ${CardContainer}{
  transform: translateY(0);
  }
}
`

const SubTitle = styled.h3`
    color: white;

`
const Paragrahp = styled.p`
    color: white;

`
const Button = styled.div`
    background-color:  #4ea93b;
    color: black;
    width: fit-content;
    padding: 5px 10px;
`

export const Card = ({title, subTitle, description, image, address}) => {
  return (
    <Cardd style={{backgroundImage: `url(${image})`}} >
        <CardContainer>
            <Title>
            {title}
            </Title>
            <SubTitle>
            {subTitle}
            </SubTitle>
            <Paragrahp>
            {description}
            </Paragrahp>
            <Button>
              <a href={address} target='_blanck' style={{color: "black", textDecoration: "none"}}>Ver mas...</a>
            </Button>
        </CardContainer>
    </Cardd>
  )
}
