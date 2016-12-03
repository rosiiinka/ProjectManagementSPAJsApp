import React, {Component} from 'react';
import HomePage from '../Home/HomePage';

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                
                <HomePage user={this.props.user}/>
                {this.props.children}
            </div>
        );
    }
}