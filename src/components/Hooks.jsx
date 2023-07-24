import { useState, useReducer} from "react";

const Hook=()=>{
  const [count,setCount]=useState(0);
  const [name,setName]=useState("")

  const reducer=(state,action)=>{
    switch(action.type){
      case "plus": 
        return state+1;
      case "minus":
        return state-1;
      case "byamount":
        return state + action.payload  
      default:return state;
      
    }
  }
  const [counter,dispatch]=useReducer(reducer,0)
  return(
    <div>
      <h1>Hook</h1>
      <h1>Count:{count}</h1>
      <h1>Counter:{counter}</h1>

      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>dispatch({type:"plus"})}>+</button>
      <button onClick={()=>dispatch({type:"minus"})}>-</button>
      <button onClick={()=>dispatch({type:"byamount", payload:5})}>5</button>
      <br />
      <br />
      <br />
      <h1>Name:{name}</h1>
      <input type="text"  onChange={({target})=>setName(target.value)}/>

      </div>
  )
}

export default Hook;