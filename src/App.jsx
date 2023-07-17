import React from 'react';

class App extends React.Component{
  render(){
    const {data}=this.props
    return(
      <div>
        <h1>{data.name} is {data.id}</h1>
      </div>
    )
  }
}
export default App