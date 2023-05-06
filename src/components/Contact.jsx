import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import MapChart from './Map';




export const Contact = () => {

  const form = useRef()
  const [success,setSuccess] = useState(null)

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    emailjs.sendForm('service_69l3i8d', 'template_fw3wvfq', form.current, 'qcxFUeALT3956T2hv')
    .then((result) => {
        console.log(result.text);
        setSuccess(true)
        form.current.reset();
    }, (error) => {
        console.log(error.text);
        setSuccess(false)
    });

    }
    

  return (
    <Section id="Contact">
      <Container>
        <Left>
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>Contactame</Title>

            <Input type='text' placeholder='Nombre' name='name' title="nombre sólo acepta letras y espacios en blanco" required
             pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
             ></Input>

            <Input type='email' placeholder='E-mail' name='email' required title="E-mail incorrecto"
              pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"></Input>

            <TextArea placeholder='comentame sobre tu proyecto' rows={10} name='message'></TextArea>
            <Button type='submit'>Enviar</Button>
          </Form>
          {success && "Tu mensaje a sido enviado, no te preocupes me pondre en contacto contigo en breve"}
        </Left>
        <Right>
          <MapChart></MapChart>
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
    scroll-snap-align: unset;
    justify-content: center;
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
    height: auto;
}
@media only screen and (min-width: 601px) and (max-width: 1023px) {
  height: auto;
  scroll-snap-align: unset;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 30px;
}
@media only screen and (max-width: 600px) {
  height: auto;
  scroll-snap-align: unset;
  grid-template-columns: 1fr;
}
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
@media only screen and (min-width: 601px) and (max-width: 1023px) {
  padding-top: 20px;
  height: 58vh;
}
@media only screen and (max-width: 600px) {
  height: 80vh;
}
`

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
gap: 15px;
@media only screen and (max-width: 1024px) {
width:80% ;
}
@media only screen and (min-width: 601px) and (max-width: 1023px) {
  align-items: center;
}
@media only screen and (max-width: 600px) {
  align-items: center;
}
`
const Title = styled.h2`
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

const Input = styled.input`
max-width: 500px;
border: none;
padding: 15px;
border-radius: 5px;
@media only screen and (min-width: 601px) and (max-width: 1023px) {
  width: 100%;
}
@media only screen and (max-width: 600px) {
  width: 100%;
}
`

const TextArea = styled.textarea`
max-width: 500px;
border: none;
padding: 15px;
border-radius: 5px;
@media only screen and (min-width: 601px) and (max-width: 1023px) {
  width: 100%;
}
@media only screen and (max-width: 600px) {
  width: 100%;
}
`
const Button = styled.button`
max-width: 500px;
border: none;
color: #fff;
font-size: 16px;
background-color: #4ea93b;
padding: 10px;
border-radius: 5px;
text-align: center;
&:hover{
    background-color: #3c7d3e;
}
&:active{
    transform: scale(0.95);
    user-select: none;
}
@media only screen and (min-width: 601px) and (max-width: 1023px) {
  width: 100%;
}
@media only screen and (max-width: 600px) {
  width: 100%;
}
`

const Right = styled.div`
@media only screen and (max-width: 1024px) {
width: 90%;    
}
@media only screen and (min-width: 601px) and (max-width: 1023px) {
  height: 50vh;
  padding-left: 110px;
  width: 85%;
}
@media only screen and (max-width: 600px) {
  height: 70vh;
  padding-left: 40px;
  width: 88%;
}
`
