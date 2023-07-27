import React from 'react';
import { Contianer, Box, Title, Desc } from './style';

class App extends React.Component{
  render(){
    return(
      <Contianer>
        <Box bg="black" type="large">Large</Box>
        <Box bg="red" type="medium">Medium</Box>
        <Box bg="yellow" type="small">Small</Box>
        <Title>Title</Title>
        <Desc left>Desc</Desc>
        <Desc>Descs</Desc>
      </Contianer>
    )
  }
}

export default App