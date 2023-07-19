import React from "react";
class Count extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
      };
   }
   
   render(){
   const plus=()=>{
      this.setState({count:this.state.count+1});
   }
   const minus=()=>{
      this.setState({count:this.state.count-1});
   }
   return(
      <div>
         <h1>State{this.state.count}</h1>
         <button onClick={plus}>plus</button>  
         <button onClick={minus}>minus</button>  
            </div>
   )

}
}
export default Count
