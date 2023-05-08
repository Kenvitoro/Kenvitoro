import React from 'react'
import styled from 'styled-components'
import { Ball } from './ball'
import { faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faNode, faReact, faSass } from "@fortawesome/free-brands-svg-icons";


const Container = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
`

export const BallsContainer = () => {

  return (
    <Container>
      <Ball icon={faHtml5} color="#f06529" colorBall="#a53c15"/>
      <Ball icon={faCss3} color="#28a4d9" colorBall="#1c7199"/>
      <Ball icon={faSass} color="#e272aa" colorBall="#9c406e"/>
      <Ball icon={faJsSquare} color="#efd81d" colorBall="#bda315"/>
      <Ball icon={faReact} color="#5ed4f4" colorBall="#3b9fbf"/>
      <Ball icon={faNode} color="#7bc326" colorBall="#4b7f18"/>
      <Ball icon={faGitAlt} color="#f1502f" colorBall="#9d1f0e"/>
      <Ball icon={faGithub} color="#000" colorBall="#FFF"/>
    </Container>
  )
}
{/* 
Para el color #f06529:

Más oscuro: #a53c15
Más claro: #ff8a63
Para el color #28a4d9:

Más oscuro: #1c7199
Más claro: #7ec8f5
Para el color #e272aa:

Más oscuro: #9c406e
Más claro: #ffafe7
Para el color #efd81d:

Más oscuro: #bda315
Más claro: #fff77b
Para el color #5ed4f4:

Más oscuro: #3b9fbf
Más claro: #8ff1ff
Para el color #7bc326:

Más oscuro: #4b7f18
Más claro: #b1ea6e
Para el color #f1502f:

Más oscuro: #9d1f0e
Más claro: #ff825f
*/}