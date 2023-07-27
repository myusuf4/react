import { Container } from "./style"
import React,{useCallback, useMemo, useState} from "react";
import { Student } from "../../context/student";
import Navbar from '../Navbar/index';

const Body=()=>{
  const [student,setStudent]=Student();

  const onDelete = (id) => { 
    const res=student.filter((v)=>v.id !== id);
    setStudent(res); 
  }

  const [count,setCount]=useState(0);

  const data=useMemo(()=>{
    return   {value:"Webbrain"}
  },[]);

  const dataCall=useCallback(()=>{
    return {value:"Webbrain"}
  },[])

  console.log("body is renderinh")
  return(
    <Container>
      <Navbar data={data} dataCall={dataCall}/>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>add</button>
      <button onClick={()=>setCount(count-1)}>minus</button>

      {/* <h1>Students:{student.length}</h1>
      {
        student.map(({id,name,status})=>(
          <div key={id}>
            <h1>
              {id}. {name} {status}
            </h1>
          <button onClick={()=>onDelete(id)}>Delete</button>
          </div>
        ))
      } */}
    </Container>
  )
}
export default Body;