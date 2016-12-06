import React, {Component} from 'react';
import CommentsForm from './CommentsForm';
import {createComment} from '../../models/requester'

export default class CommentsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {comment: '', submitDisabled: true};
        this.bindEventHandlers();
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({submitDisabled: true});
        createComment(this.state.comment)//, this.onSubmitResponse);
    }

    bindEventHandlers() {
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
       // this.onSubmitResponse = this.onSubmitResponse.bind(this);
       // this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    render() {
        return (
            <div>
                <CommentsForm
                    comment={this.state.comment}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}
    CommentsPage.contextTypes = {
        router: React.PropTypes.object
    };