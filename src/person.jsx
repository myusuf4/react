import React from "react";


class Person extends React.Component{
  constructor(prop){
    super (prop);
    this.state={
      name:"Muhammad",
      surname:"Nurmirzayev"
    }
  }
  render(){
    
    const onNameCHange=(e)=>{
      this.setState({[e.target.name]:e.target.value})
    }
  

    return(
      <div>
        <h1>Name:{this.state.name}</h1>
        <h1>Surname:{this.state.surname}</h1>
        <input name="name" type="text" onChange={onNameCHange}/>
        <input name="surname" type="text" onChange={onNameCHange}/>
      </div>
    )
  }
}
export default Person