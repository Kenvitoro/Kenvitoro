import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from "@fortawesome/free-brands-svg-icons";



export const Cube = () => {
  return (
<Container>
    <StageCubCont>
    <CubeSpinner>
        <Face1>
            <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
        </Face1>
        <Face2>
            <FontAwesomeIcon icon={faCss3} color="#28a4d9"/>
        </Face2>
        <Face3>
            <FontAwesomeIcon icon={faSass} color="#cc6699"/>
        </Face3>
        <Face4>
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d"/>
        </Face4>
        
        <Face5>
            <FontAwesomeIcon icon={faReact} color="#5ed4f4"/>
        </Face5>
        <Face6>
            <FontAwesomeIcon icon={faGitAlt} color="#f1502f"/>
        </Face6>
    </CubeSpinner>
</StageCubCont>
</Container>
  )
}



const Container = styled.div`
    width: 100%;
    height: 100vh;
    scroll-snap-align: center;
    @media only screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
}
`

const StageCubCont = styled.div`
 width: 50%;
    height: 100%;
    top: 25%;
    padding-top: 18%;
    margin-left: 0;
    position: relative;
    right: 0;
    overflow: unset;
`

const CubeSpinner = styled.div`
    overflow: unset;
    animation-name: spincube;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 12s;
    transform-style: preserve-3d;
    transform-origin: 100px 100px 0;
    margin-left: calc(50% - 100px);

    @keyframes spincube {
    from,
    to{
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); 
    }
    16%{
        transform: rotateY(-90deg); 
    }
    33%{
       transform:  rotateY(-90deg) rotateZ(90deg);
    }
    50%{
       transform:  rotateY(-180deg) rotateZ(90deg);
    }
    66%{
       transform:  rotateY(-270deg) rotateZ(90deg);
    }
    83%{
       transform:  rotateX(90deg);
    }
}
`
const Face1 = styled.div`
        position: absolute;
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        background: rgba(255, 255, 255, 0.4);
        font-size: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 20px 0px lightyellow;
        transform: translateZ(100px);
`
const Face2 = styled.div`
        position: absolute;
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        background: rgba(255, 255, 255, 0.4);
        font-size: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 20px 0px lightyellow;
        transform: rotateY(90deg) translateZ(100px);
`

const Face3 = styled.div`
        position: absolute;
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        background: rgba(255, 255, 255, 0.4);
        font-size: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 20px 0px lightyellow;
        transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
`

const Face4 = styled.div`
        position: absolute;
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        background: rgba(255, 255, 255, 0.4);
        font-size: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 20px 0px lightyellow;
        transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
`

const Face5 = styled.div`
        position: absolute;
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        background: rgba(255, 255, 255, 0.4);
        font-size: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 20px 0px lightyellow;
        transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
`

const Face6 = styled.div`
        position: absolute;
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        background: rgba(255, 255, 255, 0.4);
        font-size: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 20px 0px lightyellow;
        transform: rotateX(-90deg) translateZ(100px);
`  


