const utils = require('../utils/utils');
const TodoModel = require('../models/Todo');
const todoModel = new TodoModel();

exports.addTodo = async (ctx, next) => {
    await todoModel.saveTodo({todoContent: 'hahahha'}).then(()=>{
        console.log('增加成功');
    });
}

exports.delTodo = async (ctx, next) => {
    await todoModel.delTodo({todoContent: 'hahahha'}).then(()=>{
        console.log('删除成功');
    });
}

exports.changeTodo = async (ctx, next) => {
    await todoModel.changeTodo({}).then(()=>{
        console.log('修改成功');
    });
}

exports.getTodo = async (ctx, next) => {
    await todoModel.getTodo({}).then((doc)=>{
        console.log('查询数据');
        utils.response(doc,ctx)
    });
}
