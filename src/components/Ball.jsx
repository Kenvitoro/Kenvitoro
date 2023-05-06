import React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const BallContainer = styled.div`
height: 90px;
width: 90px;
border-radius: 50%;
display: flex;
place-items: center;
position: relative;
font-size: 32px;
`

const IconContainer = styled.div`
max-width: 100%;
max-height: 100%;
position: absolute;
top: 50%;
right: 50%;
transform: translate(50%,-50%);
`


export const Ball = ({icon, color, colorBall}) => {
  return (
    <BallContainer>
        <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1} />
            <mesh>
                <Sphere args={[1, 100, 200]} scale={1.9} >
                <MeshDistortMaterial color={colorBall} attach="material" distort={0.5} speed={2}/>
                </Sphere>
            </mesh>
         </Canvas>

         <IconContainer>
         <FontAwesomeIcon icon={icon} color={color} />
         </IconContainer>
        
        
    </BallContainer>
  )
}
