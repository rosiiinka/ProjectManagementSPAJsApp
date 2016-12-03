import React, { Component } from 'react';
import { Link } from 'react-router'


export default class RegisterForm extends Component {
    render() {
        return (
            <div className="register-form">
                Welcome
                <form class="create">
                    <p class="form-title">
                        Create new account</p>
                    <input id="crtUsrName" type="text" placeholder="Username" />
                    <input id="crtPass" type="password" placeholder="Password" />
                    <input id="btnCreate" type="button" value="Create" class="btn btn-success btn-sm" />
                    <div class="remember-forgot">
                        <div class="row">
                            <div class="col-md-6 forgot-pass-content">
                                <Link to="/login">Sign in </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}