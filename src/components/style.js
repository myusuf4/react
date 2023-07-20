import styled,{css,keyframes} from 'styled-components';

export const Container=styled("div")`
  margin:20px;
`

export const Button=styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  width:200px;
  height:40px;
  margin:10px;
  background:coral;
  border-radius:8px;
  color:white;
  cursor:pointer;
  &:active{
    transform:scale(0.97);
    opacity:0.7;
  }
`

export const ActiveButton=styled(Button)`
  height:50px;
  width: 210px;
`

const rotate=keyframes`
  from{
    transform:rotate(0def)
  }
  to{
    transform:rotate(360deg)
  }
` 

export const Rotate=styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height:100px;
  width:100px; 
  border-radius:50%;
  border:2px solid coral;
  animation:${rotate} 2s linear infinite;
`