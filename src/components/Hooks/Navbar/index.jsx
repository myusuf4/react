import { Container } from "./style";

const Navbar=({student})=>{
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