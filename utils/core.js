const Todo = require('../models/todos');

function getTodo(){
    return Todo.find().then((todos)=>{
        return todos;
    }).catch((err)=>{
        console.error('Error fetching todos', err);
        throw err;
    });
}

function addTodo(name, description, time){
    const newTodo = new Todo({
        name: name,
        description: description,
        time: time,
    });
    return newTodo.save();
}

function updateTodo(name, newname, description, time){
    return Todo.findOneAndUpdate({name: name}, {name: newname, description:description, time: time }).then((info)=>{
        return info
    }).catch((err)=>{
        throw err
    })
}

function deleteTodo(name){
    return Todo.findOneAndDelete({name: name}).then((data)=>{
        return data
    }).catch((err)=>{
        return err
    })
}


exports.getTodo = getTodo;
exports.addTodo = addTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;