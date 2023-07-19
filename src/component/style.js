import styled,{css} from 'styled-components';

const Contianer=styled('div')`
  display:flex;
  background-color:coral;
  gap:10px;

`
const getSize=(prop)=>{
  switch(prop.type){
    case 'large': return "200px";
    case 'medium': return "150px";
    case "small" : return "100px";
    default : return"150px"
  }
}

const Box=styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  font-size:28px;
  border: 2px solid blue;
  margin:10px;
  /* width:${(prop)=>prop.type==='large'?"200px":prop.type==="medium"?"150px":"100px"};
  height:${(prop)=>prop.type==='large'?"200px":prop.type==="medium"?"150px":"100px"}; */
  width:${getSize};
  height:${getSize};
  background-color:${(prop)=>prop.bg}
`
const common=css`
  color:blue;
  font-family:bold;
  font-weight:400;
  padding:10px;
  border:1px solid black;
  height:fit-content;
  font-size:20px;
`

const Title=styled.h1`
  ${common};
`
const Desc=styled.h1`
    ${common};
    font-size:16px;
    background-color:${({left})=>left?"red":"black"}
`


export {Contianer,Box,Title,Desc};
