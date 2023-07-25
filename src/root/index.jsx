import Container from "./style";
import Navbar from "../components/Hooks/Navbar";
import Body from "../components/Hooks/Body";
import { useState } from "react";

const Root=()=>{
  const students=[
    {id:1,name:"Muhammad",status:"Junior"},
    {id:2,name:"Abdurroman",status:"Intern"},
    {id:3,name:"Abdurrohim",status:"Student"},
    {id:4,name:"AbdulAziz",status:"Middle"},
    {id:5,name:"AbduAzim",status:"Middle"},
    {id:6,name:"Jaloliddin",status:"Senior"},
  ];

  const [st,setSt]=useState(students);

  const onDelete=(id)=>{
    const res=st.filter((v)=>v.id!==id);
    // console.log(id);
    setSt(res);
  };

  return (
    <Container>
      <Navbar student={st}/>
      <Body student={st} onDelete={onDelete}/>
    </Container>
    )
}
export default Root;