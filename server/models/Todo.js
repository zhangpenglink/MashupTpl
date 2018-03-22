const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoContent: String
},{ timestamps: true })

// 增
todoSchema.methods.saveTodo = (obj) => {
    return TodoModel.create(obj)
}
// 删
todoSchema.methods.delTodo = (obj) => {
    return TodoModel.remove(obj)
}
//改
todoSchema.methods.changeTodo = (conditions, doc) => {
    return TodoModel.update(conditions, doc)
}
// 查
todoSchema.methods.getTodo = (obj) => {
    return TodoModel.find(obj);
}

const TodoModel = mongoose.model('todoList', todoSchema);

module.exports = TodoModel;