import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
const student=[
  {id:1,name:"Muhammad"},
  {id:2,name:"Muhammad"},
  {id:3,name:"Muhammad"},
  {id:4,name:"Muhammad"},
  {id:5,name:"Muhammad"},
  {id:6,name:"Muhammad"},
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {student.map((v)=>{
      return <App data={v}/>
    })}
    
  </React.StrictMode>
);


