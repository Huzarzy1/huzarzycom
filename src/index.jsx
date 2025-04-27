import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Header from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const header = ReactDOM.createRoot(document.getElementById('header'));
// header.render(
//   <React.StrictMode>
//     <Header />
//   </React.StrictMode>
// );


reportWebVitals();
