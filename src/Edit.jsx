import React  from "react";
import students from './mock'

 class Edit extends React.Component{
  constructor(){
    super();
    this.state={
      data:students,
      active:null
    }
  }
  render(){
    const onChange=(e)=>{
      this.setState({[e.target.name]:e.target.value})
    }
  
    const onDelete=(id)=>{
      let res=this.state.data.filter((v)=>v.id !==id)
      this.setState({data:res})
    }

    const onEdit=({id,name,status},isSave)=>{
      if(isSave){
        let res=this.state.data.map((value)=>value.id===this.state.active.id?{...value,name:this.state.name,status:this.state.status}:value)
        this.setState({active:null,data:res})
      }
      else{

        this.setState({
          name:name,
          status:status,
          active:{id, name,status}
        })
      }
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
                  <td>{
                    this.state.active?.id===id?<input type="text" value={this.state.name} name="name" />:name
                    }</td>
                  <td>{
                    this.state.active?.id===id?<input type="text" value={this.state.surname} name="surname" onChange={onChange}/>:status
                    }</td>
                  <td><button onClick={()=>onDelete(id)}>Delete</button></td>
                  <td><button onClick={()=>onEdit({id,name,status},this.state.active?.id===id)}>
                    {this.state.active?.id===id ? 'save' :"edit"}
                    </button></td>
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

export default Edit;