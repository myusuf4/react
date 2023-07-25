import React,{createContext, useState} from "react";

export const StudentsContext=createContext();

const StudentList=({children})=>{
  const [student,setStudent]=useState([
      {id:1,name:"Muhammad",status:"intern"},
      {id:2,name:"Abdurrohman",status:"junior"},
      {id:3,name:"Abdukarim",status:"student"},
      {id:4,name:"Ahmad",status:"student"},
      {id:5,name:"Ali",status:"intern"},
      {id:6,name:"Umar",status:"senior"},
      {id:7,name:"AbuBakr",status:"middle"},
  ]);
  return(
    <StudentsContext.Provider value={[student,setStudent]}>
      {children}
    </StudentsContext.Provider>
  )
};

export default StudentList
