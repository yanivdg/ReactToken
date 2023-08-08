import React from 'react';
import ReactDOM from 'react-dom';
//import App from 'https://cdn.jsdelivr.net/gh/yanivdg/ReactToken@gh-pages/src/App';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
  )
);

reportWebVitals();
