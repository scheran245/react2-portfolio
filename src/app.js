import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import AppRouter from './routers/AppRouter';

console.log("app js is running !");
var appRoot=document.getElementById("app");


ReactDOM.render(<AppRouter />,appRoot);




