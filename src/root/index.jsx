import Hook from "../components/Hooks"
import Container from "./style";
// import Navbar from "../components/Navbar";
import Body from "../components/Body";
// import { useState } from "react";
// import LocalStorage from "../components/LocalStorage";


const Root=()=>{
  return (
    <Container>

      {/* <Navbar/>  */}
       <Body/>
      {/* <LocalStorage/> */}
      {/* <Navbar/> */}
      {/* <Body/> */}
      <LocalStorage/>
      <Hook/>
    </Container>
    )
}
export default Root;