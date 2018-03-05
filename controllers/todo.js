const TodoModel = require('../models/Todo');
const todoModel = new TodoModel();
const response = (result, ctx) => {
    let obj = {
        code: result ? 0 : 1,
        data: result
    }
    ctx.body = obj;
};
exports.addTodo = (ctx, next) => {
    todoModel.saveTodo({todoContent: 'hahahha'});
}

exports.delTodo = (ctx, next) => {
    console.log(ctx);
    todoModel.delTodo({todoContent: 'hahahha'});
}

exports.searchTodo = async (ctx, next) => {
    ctx.body = await todoModel.searchTodo((error,docs)=>{
        return docs;
    });
}