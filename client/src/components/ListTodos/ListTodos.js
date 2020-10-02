import React, { Fragment, useState, useEffect } from "react";
import EditTodo from '../EditTodo.js/EditTodo';

const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    const deleteTodo=async (id)=>{
try {
    const deleteTodo=await fetch(`http://localhost:5000/todos/${id}`,{
        method:"DELETE"
    });
    console.log('deleteTodo response',deleteTodo)
    setTodos(todos.filter(todo=> todo.todo_id !==id))
} catch (err) {
    console.error(err.message)
}
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const responseData = await response.json();
            // console.log('responseData',responseData)
            setTodos(responseData)
        } catch (err) {
            console.error(err.message)
        }
    }

    // console.log('state', todos)
    useEffect(() => {
        getTodos();
    }, []);

    const todoRows = todos.map((todo, index) => {
        return (
            <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><EditTodo todo={todo}/></td>
                <td><button className="btn btn-danger" onClick={()=>deleteTodo(todo.todo_id)}>Delete</button></td>
            </tr>
        )
    })

    return (
        <Fragment>
            <table className="table m-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todoRows}


                </tbody>
            </table>
        </Fragment>
    )
};

export default ListTodos;