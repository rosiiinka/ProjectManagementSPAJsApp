import React, {Component} from 'react';


export default class CommentsForm extends Component {




    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>

                <div className="form-group">
                    <label>Leave a comment:</label>
                    <textarea
                        className="form-control"
                        name="comment"
                        value={this.props.comment}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input className="btn btn-default" type="submit" value="Submit changes" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}
