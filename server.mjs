import express from 'express';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 3000;

let todos = [];

app.use(express.json());
app.use(cors())

app.post('/todo', (req, res) => {
    
    todos.push(req.body.text);

    res.send({
        message: "your todo is saved",
        data: todos
    })
})
app.get('/todos', (req, res) => {
    
    res.send({
        message: "here is you todo list",
        data: todos
    })
})
app.delete('/del', (req, res) => {
    todos=[]
    res.send({
        message: "todo is deleted",
        data: todos
    })
})

// POST 172.16.18.202:3000/water

// 172.16.18.202:5500

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})