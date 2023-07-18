import React from "react";
import students from './mock.js'
class Crud extends React.Component{
  constructor(prop){
    super(prop);
    this.state={
      data:students
    }
  }
  render(){
    const onFilter=(e)=>{
     let res = students.filter((v)=>v.name.includes(e.target.value))
     this.setState({data:res})
    }
    return(
      <>

        <input type="text" placeholder="filter" onChange={onFilter}/>
        {
          this.state.data.map(({id,name,status})=>{
            return <h1 key={id}>{id} {name} {status}</h1>
          })
        }
      </>
    )
  }
}

export default Crud