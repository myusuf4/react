import Control from "../components/UseRef/Controlled";
import UnControl from "../components/UseRef/Uncontrolled";
import Container from "./style";

const Root=()=>{
  return (
    <Container>
      <Control/>
      <UnControl/>
    </Container>
    )
}
export default Root;