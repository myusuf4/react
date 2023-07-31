import React,{useRef} from "react"; 

const UnControl=()=>{
  const title=useRef("")
  return(
    <div>
      <h1>UnControl</h1>
      <input type="text" ref={title}/>
      <button onClick={()=>alert(title.current.value)}>click</button>
    </div>
  )

}
export default UnControl;