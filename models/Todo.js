const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoContent: String
},{ timestamps: true })

// 增
todoSchema.methods.saveTodo = (obj, callback) => {
    TodoModel.create(obj, (err) => {
        callback&&callback(err)
    })
}
// 删
todoSchema.methods.delTodo = (obj, callback) => {
    TodoModel.remove(obj, (err) => {
        callback&&callback(err)
    })
}
// 查
todoSchema.methods.searchTodo = (obj, callback) => {
    return TodoModel.find(obj, (err) => {
        return callback&&callback(err)
    })
}

const TodoModel = mongoose.model('todoList', todoSchema);

module.exports = TodoModel;