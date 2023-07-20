//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import 'https://cdn.jsdelivr.net/gh/yanivdg/ReactToken@gh-pages/index.css';
import App from 'https://cdn.jsdelivr.net/gh/yanivdg/ReactToken@gh-pages/App';
import reportWebVitals from 'https://cdn.jsdelivr.net/gh/yanivdg/ReactToken@gh-pages/reportWebVitals';

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
