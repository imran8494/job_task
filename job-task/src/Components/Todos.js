import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import http from "../http";

const Todos = () => {

    // set data in a variable and show data to map function as a loop

const [todos, setTodos] = useState([]);

// use useEffect hooks for getting data from backend

useEffect(()=> {
    fetchAllTodos();
},[]);

// get data from backend

const fetchAllTodos = () => {
    http.get('/todo').then(res=>{
        setTodos(res.data);
    })
}

const deleteTodo = (id) => {
    http.delete('/todo/'+id).then(res=>{
        fetchAllTodos();
    });
}

    return (<>
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title float-start"> List</h3>
                    <Link to="add-todos" className="btn btn-sm
                                    btn-success float-end"><i className="fas fa-plus"></i> Add Todo
                    </Link>
                </div>
                <div className="card-body">
                    <table id="data_table" className="table dataTable no-footer dtr-inline">
                        <thead>
                        <tr>
                            <th className="text-center text-nowrap">Sl</th>
                            <th className="text-center text-nowrap"> Name</th>
                            <th className="text-center text-nowrap"> Title</th>
                            <th className="text-center text-nowrap">Action</th>
                        </tr>
                        </thead>
                        <tbody>

                        {todos.map((todo,index) =>(
                            <tr key={todo.id}>
                                <td className="text-center">{++index}
                                </td>
                                <td className="text-center">{todo.name}
                                </td>
                                <td className="text-center">{todo.title}
                                </td>
                                <td className="text-center">
                                    <Link to={{ pathname: "/edit-todo/"+todo.id}} type="submit" className="btn btn-info text-uppercase"> Edit
                                    </Link>
                                    <button type="button" onClick={()=> {deleteTodo(todo.id)}} className="btn btn-warning text-uppercase"> Delete
                                    </button>

                                </td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
        </>);
};

export default Todos;