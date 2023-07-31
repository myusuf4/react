import React,{useState} from "react";

const Control=()=>{
  const [control,setControl]=useState("");

  const toControl=(e)=>{
    setControl(e.target.value)
  }
  return(
    <div>
      <h1>Control:{control}</h1>
      <input type="text" onChange={toControl} />
      <br />
      <br />
      <hr />
    </div>
  )

}
export default Control;