import React from 'react'
import {getTVMaze, addTodo} from '../libs/api'

export default class Todo extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            todoList: ['问题一', '问题二']
        }
    }
    // 生命周期
    componentDidMount (){
        this.getTVMaze();
    }
    // 接口
    getTVMaze = () => {
        getTVMaze({}).then((res)=>{
            // console.log(res)
            console.log('进1');
            return (a,b)=>{
                console.log(a,b,'dayin')
            }
        }).then((x)=>{
            console.log(x, 'x');
            console.log('进2');
            x('1','2');
        }).then((res)=>{
            console.log('进3');
            console.log(this, 'this');
        });
    }
    // 事件
    _dealTodo = (index) => {
        let todoList = this.state.todoList;
        todoList.splice(index, 1);
        this.setState({
            todoList: todoList
        })
    }
    _submitTodo = (x) => {
        // TodoModel.save({todoContent: '问题四'})
        addTodo({addItem: '问题四'}).then((res)=>{
            console.log(x)
        });
    }

    // 渲染
    _renderTodoList = () => {
        return this.state.todoList.map((item, index) => (
            <li key={index}>
                {item}
                <button onClick={this._dealTodo.bind(this, index)}>删除</button>
            </li>
        ))
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
