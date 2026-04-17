const express = require('express');
const app = express();
const port = 9009;

const todoroute = require('./routes/todo');

app.use('/todo', todoroute);


app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})