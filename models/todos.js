const database = require('../database/database');

const todoSchema = new database.Schema({
    name: String,
    description: String,
    time: String,
})


const Todo = database.model('Todo', todoSchema);



module.exports = Todo;
// "6pm to 8pm"