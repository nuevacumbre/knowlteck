import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './assets/main.css';
//import {App} from './App.jsx';
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/
////////////////import express from "express";
//import path  from "path";
//import config from "./config.js";
//console.log("hola0");
/////////const {pathname: root1} = new URL('./views/', import.meta.url)
//////////const {pathname: root2} = new URL('./public/', import.meta.url)

// Initiliazations
////////const app = express();
//createAdminUser();
//console.log("hola");

// Settings
///////////app.set('port', process.env.PORT || 3000);
///////app.set("./views/", ( root1, "./views"));

//app.set("port", config.PORT || 4000);
// Middlewares

// Global Variables

// Routes

// Static Files
////////////app.use(express.static(root2, "./public"));

// Server is listenning
///////app.listen(app.get('port'), () => {
/////////// console.log('server on port ', app.get('port'));
////////////});

