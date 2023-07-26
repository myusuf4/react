import { useState } from "react";

const LocalStorage=()=>{
  const [count,setCount]=useState(Number(JSON.parse(localStorage.getItem("count"),"count")));

  const plus=()=>{
    setCount(count+1)
    localStorage.setItem("count",JSON.stringify({data:count+1}));
  };
  const minus=()=>{
    localStorage.setItem("count",count-1);

    setCount(count-1)
  };

  console.log();

  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={plus}>add </button>
      <button onClick={minus}>minus </button>
      <button onClick={()=>localStorage.removeItem("count")}>remove</button>
      <button onClick={()=>localStorage.clear()}>clear</button>
    </div>
  )
}
export default LocalStorage;