const utils = require('../utils/utils');
const TodoModel = require('../models/Todo');
const todoModel = new TodoModel();

exports.addTodo = async (ctx, next) => {
    console.log(ctx.query);
    await todoModel.saveTodo({todoContent: 'hahahha'}).then(()=>{
        console.log('增加成功');
    });
}

exports.delTodo = async (ctx, next) => {
    console.log(ctx.query);
    await todoModel.delTodo({todoContent: 'hahahha'}).then(()=>{
        console.log('删除成功');
    });
}

exports.changeTodo = async (ctx, next) => {
    console.log(ctx.query);
    await todoModel.changeTodo({}).then(()=>{
        console.log('修改成功');
    });
}

exports.getTodo = async (ctx, next) => {
    console.log(ctx.query);
    await todoModel.getTodo({}).then((doc)=>{
        console.log('查询数据');
        utils.response(doc,ctx)
    });
}
