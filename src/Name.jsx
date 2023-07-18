import React  from "react";

class Name extends React.Component{
   constructor(prop){
      super(prop)
      this.state={
         value:""
      }
   }
   render(){
      const follow=(e)=>{
         this.setState({value:`${e.target.value}`})
      }


      return(
         <div>
            <h1>{this.state.value}</h1>
            <input type="text" onChange={follow}/>
         </div>
      )
   }
   
   
}

export default Name