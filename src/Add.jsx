import React  from "react";
import students from './mock'

 class Add extends React.Component{
  constructor(){
    super();
    this.state={
      data:students,
      name:"",
      status:"",
    }
  }
  render(){

    const onAdd=()=>{
      let user={
        id:Date.now(),
        name:this.state.name,
        status:this.state.status
      }
      this.setState({
        data:[...this.state.data,user],
        name:"",
        status:"",
      })
      console.log(user)
    }
    const onNameChanged=(e)=>{
      this.setState({[e.target.name]:e.target.value})
    }
    return(
      <div>
        <h1>Name:{this.state.name}</h1>
        <h1>Status:{this.state.status}</h1>
        <input value={this.state.name} type="text" placeholder="name"  name="name" onChange={onNameChanged} required/>
        <input value={this.state.status} type="text" placeholder="status" name="status" onChange={onNameChanged}/>
        <button onClick={onAdd}>Add</button>
        <br />
        <br />
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>

            {this.state.data.length?
            this.state.data.map(({id,name,status})=>{
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{status}</td>
                  <td><button>Delete</button></td>
                  <td><button>Edit</button></td>
                </tr>
              )
            }): 
           <tr>
            <th colSpan={5}>
              <h1>No data</h1>
            </th>
           </tr>
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Add