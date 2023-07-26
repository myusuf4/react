import Container from "./style";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
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