import React, { Component } from 'react';
import { Link } from 'react-router'
import './LoginForm.css';

export default class LoginForm extends Component {
    render() {
        return (
            <div className="login">
                Welcome
                <form className="login">
                    <p className="form-title">
                        Sign In</p>
                    <input id="lgnUsrName" type="text" placeholder="Username" />
                    <input id="lgnPass" type="password" placeholder="Password" />
                    <input id="btnLogin" type="button" value="Sign In"  class="btn btn-success btn-sm" />
                    <div className="remember-forgot">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" />
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-6 forgot-pass-content">
                                <Link to="/register">Create a new account</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}



