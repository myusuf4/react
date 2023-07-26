import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './context/index';

import './index.css';
import Root from './root';

import App from './component/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Home>
    <Root/>
  </Home>
  <Root/>
  </>
);


