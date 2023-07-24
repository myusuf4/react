import { useState } from "react";

const Hook=()=>{
  const [count,setCount]=useState(0);
  const [name,setName]=useState("")

  const plus=()=>{
    setCount(count+1);
  }
  return(
    <div>
      <h1>Hook</h1>
      <h1>Count:{count}</h1>
      <button onClick={plus}>+</button>
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