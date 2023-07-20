import React from 'https://unpkg.com/react@17/umd/react.development.js';
import ReactDOM from 'https://unpkg.com/react-dom@17/umd/react-dom.development.js';
import App from 'https://cdn.jsdelivr.net/gh/yanivdg/ReactToken@a007ef4/src/App.js';
import reportWebVitals from 'https://cdn.jsdelivr.net/gh/yanivdg/ReactToken@gh-pages/src/reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
  )
);

reportWebVitals();
