import { Container } from "./style";
import React,{useContext} from "react";
import { StudentsContext } from "../../context";

const Navbar=()=>{
  const [student]=useContext(StudentsContext);

  return(
    <Container >
      <h1>Students{student.length}</h1>
      <h1>Home</h1>
      <h1>Properties</h1>
      <h1>Contacts</h1>
    </Container>
  )
}
export default Navbar;