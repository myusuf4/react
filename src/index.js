import React from 'react';
import ReactDOM from 'react-dom/client';
import StudentsList from './components/context';
import './index.css';
import Root from './root';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <StudentsList>
    <Root/>
  </StudentsList>
  </>
);