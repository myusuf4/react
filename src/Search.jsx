import React  from "react";
import students from './mock'

 class Search extends React.Component{
  constructor(){
    super();
    this.state={
      data:students,
      name:"",
      status:"",
      search:"id"
    }
  }
  render(){
     const onFilter=(e)=>{
     const {value}=e.target
     let res = students.filter((v)=>`${v[this.state.search]}`.toLowerCase().includes(value.toLowerCase()))
     this.setState({data:res})
    }


    const onSelect=(e)=>{
      this.setState({search:e.target.value})
    }
    return(
      <div>
        <input type="text" placeholder="search" onChange={onFilter} />
        <select name="" id="" onChange={onSelect}>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="Status">Status</option>
        </select>
        <h1>Name:{this.state.name}</h1>
        <h1>Status:{this.state.status}</h1>
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

export default Search