import { useState,useEffect } from "react";

const Hook=()=>{
  const [count,setCount]=useState(0);
  const [name,setName]=useState("")

  useEffect(()=>{
    console.log("1");
  },)
  useEffect(()=>{
    console.log("2");
  },[])
  useEffect(()=>{
    console.log("3");
  },[name])
  useEffect(()=>{
    console.log("4");
  },[name,count])
  return(
    <div>
      <h1>Hook</h1>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <br />
      <br />
      <br />
      <h1>Name:{name}</h1>
      <input type="text"  onChange={({target})=>setName(target.value)}/>

      </div>
  )
}
export default Hook;