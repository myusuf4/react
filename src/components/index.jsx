import React  from "react";

class Home extends React.Component{
  constructor(prop){
    super(prop);
    this.state={
      count:0,
    }
    // console.log("constructer");
  }

  // componentWillMount(){
  //   console.log("will");
  // }
  // componentDidMount(){
  //   console.log('did');
  // }
  // componentWillReceiveProps(){
  //   console.log("keldi");
  // }
  // shouldComponentUpdate(){
  //   console.log("should");
  //   return true||false;
  // }

  // componentWillUpdate(){
  //   console.log("will");
  // }

  // componentDidUpdate(){
  //   console.log("didup");
  // }

  // componentWillUnmount(){
  //   console.log("unmount");
  // }


  plus(){
    this.setState({count:this.state.count+1})
  }
  render(){
    return(
      <div>
        <h1>React Lifecycles</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.plus()}>CLick</button>
      </div>
    )
  }

}

export default Home