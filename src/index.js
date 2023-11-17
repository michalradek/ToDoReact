import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import  Content  from './components/Content';
import './main.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header />
    <Content />
  </React.StrictMode>
);
