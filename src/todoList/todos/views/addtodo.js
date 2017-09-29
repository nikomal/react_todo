import React, {Component} from 'react';
import * as Actions from '../actions';
import {connect} from 'react-redux';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:''
        };
        this.inputChange = this.inputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const value = this.state.value;
        if (!value.trim()) {
            return;
        }
        this.props.onAdd(value);
        this.setState({value: ''})
    }

    inputChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input type="text" className="new-todo" value={this.state.value} onChange={this.inputChange}/>
                    <button className="add-btn" type="submit">
                        添加
                    </button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onAdd: (text) => {
            dispatch(Actions.addTodo(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);