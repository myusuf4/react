import { Container } from "./style"

const Body=({student,onDelete=Function.prototype})=>{
  return(
    <Container>
      <h1>Students:{student.length}</h1>
      {
        student.map(({id,name,status})=>(
          <div key={id}>
            <h1>
              {id}. {name} {status}
            </h1>
          <button onClick={()=>onDelete(id)}>Delete</button>
          </div>
        ))
      }
    </Container>
  )
}
export default Body;