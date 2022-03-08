import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalCSS} from "./globalCss"


ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS>
    <App />
    </GlobalCSS>
  </React.StrictMode>,
  document.getElementById('root')
);


