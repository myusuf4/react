import React from "react";

class Class extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  render(){
    return(
      <div>
        <h1>Class</h1>
        <h1>Count:{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
        <button onClick={()=>this.setState({count:this.state.count-1})}>-</button>
      </div>
    )
  }
}
export default Class