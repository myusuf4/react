import { Container } from "./style"
import React from "react";
import { Student } from "../../context/student";

const Body=()=>{
  const [student,setStudent]=Student();

  const onDelete = (id) => { 
    const res=student.filter((v)=>v.id !== id);
    setStudent(res); 
  }


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