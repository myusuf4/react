import React  from "react";

const students=[
  {id:1,name:"Muhammad",status:"junior"},
  {id:2,name:"AbduJalil",status:"senior"},
  {id:3,name:"Abdukarim",status:"middle"},
  {id:4,name:"Abdussomad",status:"middle"},
  {id:5,name:"Abdurrohman",status:"intern"},
  {id:6,name:"Abdulloh",status:"senior"},
];



class Home extends React.Component{
  constructor(prop){
    super(prop);
    this.state={
      list:students
    };
  }
  render(){

    const onDelete=(id)=>{
      let res=this.state.list.filter((v)=>v.id !== id)
      this.setState({list:res})
    }

    return(
      <div>
        {this.state.list.map(({id,name,status},index)=>{
          return <h1 key={id}>
           {id} {name} {status} 
            <button onClick={()=>onDelete(id)}>delete</button>
          </h1>
        })}
      </div>
    )
  }
}
export default Home;