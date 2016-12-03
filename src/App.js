import React, { Component } from 'react';
import './App.css';
import HomePage  from "./components/HomePage/HomePage";
import LoginForm  from "./components/HomePage/LoginForm/LoginForm";
import RegisterForm  from "./components/HomePage/RegisterForm/RegisterForm";

class App extends Component {
  render() {
    return (
        <div>
            <HomePage/>
                
            <RegisterForm/>
        </div>

    );
  }
}

export default App;
