import React from 'https://unpkg.com/react@17/umd/react.development.js';//'react';
import ReactDOM from 'https://unpkg.com/react-dom@17/umd/react-dom.development.js';//'react-dom/client';
//import './index.css';
//import 'https://cdn.jsdelivr.net/gh/yanivdg/ReactToken@gh-pages/src/index.css';
//import App from './App';
//import App from 'https://cdn.jsdelivr.net/gh/yanivdg/ReactToken@gh-pages/src/App';
//import reportWebVitals from './reportWebVitals';
//import reportWebVitals from 'https://cdn.jsdelivr.net/gh/yanivdg/ReactToken@gh-pages/src/reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
