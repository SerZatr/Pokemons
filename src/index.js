import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function updateSize() {
  let height = window.innerHeight + 'px';
  document.getElementById('root').style.setProperty('height', height);
}

window.onload = updateSize;
window.onresize = updateSize;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
