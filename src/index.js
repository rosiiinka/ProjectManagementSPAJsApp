import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginForm from './components/HomePage/LoginForm/LoginForm';
import RegisterForm from './components/HomePage/RegisterForm/RegisterForm';
import './index.css';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}/>       
        <Route path="login" component={LoginForm}/>       
        <Route path="/register" component={RegisterForm}/>

    </Router>,
  document.getElementById('root')
);
