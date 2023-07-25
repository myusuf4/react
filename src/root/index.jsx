import Container from "./style";
import Navbar from "../components/Hooks/Navbar";
import Body from "../components/Hooks/Body";
import { useState } from "react";

const Root=()=>{
  return (
    <Container>
      <Navbar/>
      <Body/>
    </Container>
    )
}
export default Root;