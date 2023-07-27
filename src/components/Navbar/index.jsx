import { Container } from "./style";
import React,{memo} from "react";
// import {Student } from "../../context/student";


const Navbar=({data,dataCall})=>{
  // const [student]=Student();
  console.log("navbar is rendering");
  return(
    <Container >
      <h1>{data.value} </h1>
      <h1>Home {dataCall().value} </h1>
      <h1>Home</h1>
      <h1>Properties</h1>
      <h1>Contacts</h1>
    </Container>
  )
}
export default memo(Navbar);