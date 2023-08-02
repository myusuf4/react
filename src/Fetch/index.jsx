import { useState,useEffect } from "react";
import { Container,Left, Right } from "./style";


const Fetch=()=>{
  const [student,setStudent]=useState([]);
  const [selected,setSelected]=useState({});


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{return res.json()})
    .then((res)=>{setStudent(res)})
  },[]);

  const getInf=(id)=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>{return res.json()})
    .then((res)=>{setSelected(res)})
  }

  return(
    <Container>

      <Left>
        {
          student.map((v)=>{
            return(
              <h1 key={v.id}>{v.id} {v.name} <button onClick={()=>getInf(v.id)}>get info</button> </h1>
            )
          })
        }
      </Left>

      <Right>
              <div key={selected?.id}>
                <h1>Name:{selected?.name} </h1>
                <h1>Username: {selected?.username}</h1>
                <h1>Email: {selected?.email}</h1>
              </div>
      </Right>

        
    </Container>
  )
}
export default Fetch;