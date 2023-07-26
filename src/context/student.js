import React,{createContext,useContext,useState} from "react";


export  const StudentsContext=createContext();
export const Student=()=>useContext(StudentsContext);

const StudentList=({children})=>{
  const [student,setStudent]=useState([
    {id:1,name:"Muhammad",status:"Junior"},
    {id:2,name:"Abdurroman",status:"Intern"},
    {id:3,name:"Abdurrohim",status:"Student"},
    {id:4,name:"AbdulAziz",status:"Middle"},
    {id:5,name:"AbduAzim",status:"Middle"},
    {id:6,name:"Jaloliddin",status:"Senior"},
  ]);
  return(
    <StudentsContext.Provider value={[student,setStudent]}>
        {children}
    </StudentsContext.Provider>
  )
}
export default StudentList;