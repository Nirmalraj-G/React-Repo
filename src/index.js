import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Task8 from './ReactTask/Task8/Task8';
import Task7 from './ReactTask/Task7/Task7';
import Task6 from './ReactTask/Task6/Task6';
import Hooks from './ReactTask/Task10/Hooks';
import FruitCounter from './ReactTask/Task11/FruitCounter';
import Feedback from './ReactTask/Task12/Feedback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Feedback/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
