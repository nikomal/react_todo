import React,{Component} from 'react';

class AddTodo extends Component {
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

export default AddTodo;