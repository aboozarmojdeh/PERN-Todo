const express=require("express");
const app=express();
const cors=require("cors");
const pool=require('./db');
// middleware
app.use(express.json()); //req.body
app.use(cors());


//ROUTES

//CREATE A TODO
app.post('/todos', async (req,res)=>{
    try {
        const {description}=req.body;
        const newTodo=await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description])

        res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message)
    }

})

// GET ALL TODOS
app.get('/todos',async (req,res)=>{
    try {
        const allTodo=await pool.query("SELECT * FROM todo");
        res.json(allTodo.rows)

    } catch (err) {
        console.error(err.message)
    }
})
// GET A TODO
app.get('/todos/:id',async (req,res)=>{
    try {
        
        console.log(req.params)
        const {id}=req.params
        console.log('id',id)
        const todo=await pool.query("SELECT * FROM todo WHERE todo_id=$1",[id]);
        res.json(todo.rows[0])

    } catch (err) {
        console.error(err.message)
    }
})
// UPDATE A TODO
app.put('/todos/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const {description}=req.body;
        const updatedTod=await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id])
    res.json("todo updated successfully!!!! Hurray!")
    } catch (err) {
        console.error(err.message)
    }
})
// DELETE A TODO
app.delete('/todos/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        
        const deletedTod=await pool.query("DELETE FROM todo WHERE todo_id = $1",[id])
    res.json("todo deleted successfully!!!! Hurray!")
    } catch (err) {
        console.error(err.message)
    }
})




app.listen(5000,()=>{
    console.log("server is listening to PORT 5000")
})
