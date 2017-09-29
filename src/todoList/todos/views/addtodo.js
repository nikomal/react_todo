import React, {Component} from 'react';
import * as Actions from '../actions';
import {connect} from 'react-redux';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.refInput = this.refInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const input = this.input;
        if (!input.value.trim()) {
            return;
        }
        this.props.onAdd(input.value);
        input.value = '';
    }

    refInput(node) {
        this.input = node;
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input type="text" className="new-todo" ref={this.refInput}/>
                    <button className="add-btn" type="submit">
                        添加
                    </button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch,ownProps) {
    return {
        onAdd:(text) =>{
            dispatch(Actions.addTodo(text))
        }
    }
}

export default connect(null,mapDispatchToProps)(AddTodo);