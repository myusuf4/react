import React from "react";
import { Container,Button, ActiveButton, Rotate } from "./style";
import { ThemeProvider,createGlobalStyle } from "styled-components";

const GlobalStyle=createGlobalStyle`
body{
  background:${(props)=>props.theme.bg};
  color:${(props)=>props.theme.cl};
}
`

class Home extends React.Component{
  state={
    light:false,
  };
  render(){
    const theme={
      bg:this.state.light?"white":"black",
      cl:this.state.light?'black':"white",
    }
    return(
      <ThemeProvider theme={theme}>
        <GlobalStyle/> 
        <h1>theme provider</h1>
        <Button>CLick me!</Button>
        <ActiveButton>Active</ActiveButton>
        <Rotate>Rotate</Rotate>
        <br />
        <br />
        <button onClick={()=>this.setState({light:!this.state.light})}>Change</button>
      </ThemeProvider>
    )
  }
}
export default Home