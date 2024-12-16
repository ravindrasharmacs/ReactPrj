import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoList from './TodoList';
import FormWithControlledComponents from './FormWithControlledComponents';
// import FormWithControlledComponents from '../formwithcontrolledComponents';
// import formwithcontrolledComponents from './formwithcontrolledComponents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // strictmode is used to detect any potential errors in the code
  // it is used to detect any errors in the code
  <React.StrictMode>
    <FormWithControlledComponents />
    <TodoList />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
