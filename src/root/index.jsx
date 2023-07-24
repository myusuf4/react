import Class from "../components/Class"
import Hook from "../components/Hooks"
import Container from "./style";

const Root=()=>{
  return (
    <Container>
      <Class flex={1}/>
      <Hook/>
    </Container>
    )
}
export default Root;