import styled from "styled-components";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Who } from "./components/Who";
import { Works } from "./components/Works";
import { Navbar } from "./components/Navbar"

const Container = styled.div`
height: 100vh;
scroll-behavior: smooth;
overflow-y: auto; 
color: white;
background: url('/img/bg.jpeg');
scrollbar-width: thin; 
scrollbar-color: #4ea93b rgb(30, 0, 62);
&::-webkit-scrollbar{
  width: 15px;
}
&::-webkit-scrollbar-track{
  border-radius: 100vw;
  background-color: rgb(30, 0, 62);
  margin-top: 1em;
  margin-bottom: 1em;
}

&::-webkit-scrollbar-thumb{
  border: 3px solid rgb(30, 0, 62);
  background-color: #4ea93b;
  border-radius: 100vw;
}
`;

function App() {

  return (
    
    <Container>
      <Navbar />
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>

    
  )
}

export default App
