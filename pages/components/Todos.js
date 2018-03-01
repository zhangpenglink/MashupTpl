import React from 'react'

export default class Todo extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            todoList: ['问题一', '问题二']
        }
    }

    _renderTodoList = () => {
        return this.state.todoList.map((item, index) => (
            <li key={index}>
                {item}
                <button onClick={this._dealTodo.bind(this, index)}>删除</button>
            </li>
        ))
    }
    _dealTodo = (index) => {
        let todoList = this.state.todoList;
        todoList.splice(index, 1);
        this.setState({
            todoList: todoList
        })
    }
    _submitTodo = (x) => {
        console.log(x)
    }
    render () {
        return (
            <div>
                <input type='text' name='title' placeholder='What needs to be done?' />
                <button onClick={this._submitTodo.bind(this, 'submit')}>提交</button>
                <ul>
                    {this._renderTodoList()}
                </ul>
            </div>
        )
    }
}
