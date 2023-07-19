import React  from "react";
import students from './mock'

 class Delete extends React.Component{
  constructor(){
    super();
    this.state={
      data:students,
    }
  }
  render(){

    const onDelete=(id)=>{
      let res=this.state.data.filter((v)=>v.id !==id)
      this.setState({data:res})
    }

    return(
      <div>
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
                  <td><button onClick={()=>onDelete(id)}>Delete</button></td>
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

export default Delete