const express = require('express');
const getTodo = require('../utils/core').getTodo;
const addData = require('../utils/core').addTodo;
const updateTodo = require('../utils/core').updateTodo;
const deleteTodo = require('../utils/core').deleteTodo;


const app = express.Router();



app.use(express.json());


// Get d]ata from the data base
app.get('/todo',async (req, res)=>{
    try{
        const data  = await getTodo();
        res.status(200).json(data);
    }catch(err){
        res.status(500).json(`Error fetching data -> ${err}`)
    }
})

// add data

app.post('/todo', async(req, res)=>{
    try{
        const {name , description, time} = req.body;
        try{
            const data  =  await addData(name, description, time);
            res.status(201).json({'Message':"Successfully created todo"})
        }catch(err){
            res.status(500).json({"Error":`Unable to Create todo ${err}`})
        }
    }catch(err){
        res.status(401).json({"Error":`data malformed: ${err}`});
    }
})

// update data
app.put('/todo', async (req, res)=>{
    try{
        const {newname, name, description, time} = req.body;
        try{
            const data = await updateTodo(name, newname, description, time)
            res.status(201).json({"Message":`successfull ${data}`})
        }catch(err){
            res.status(500).json({"error":`Unable to Update due to ${err}`})
        }
    }catch(err){
        res.status(401).json({"Error":"Bad request"})
    }
})


// delete 

app.delete('/todo', async (req, res)=>{
    try{
        const {name} = req.body;
        try{
            const data = await deleteTodo(name);
            res.status(201).json({"Message":`successfully deleted`});
        }catch(err){
            res.status(500).json({"Error":"Unable to delete"});
        }
    }catch(err){
        res.status(401).json({"Error":"Malformed request"})
    }
})

module.exports = app;
