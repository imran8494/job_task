import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import http from "../http";


const EditTodos = (props) => {

    // use to set the input
const navigate = useNavigate();
const [inputs, setInputs] = useState({});


    // get id

    const {id} = useParams();

    // useEffect for backend data

    useEffect(() => {
        fetchTodo()
    },[])

    const fetchTodo= () => {
        http.get('/todo/'+id+'/edit').then((res) => {
            setInputs({
                name:res.data.name,
                title:res.data.title,
            });
        });
    }

// user handleChange function to change the value of input fields

const handleChange = (event) => {
    const name = event.target.name;

    const value = event.target.value;
    setInputs(values => ({...values,[name]:value}))
}

// submit form data to backend

const submitForm = () => {
    // console.log(inputs);

    http.put('/todo/'+id, inputs).then((res)=>{
        navigate('/');
    })

}


    return (
        <div>
            <div className="container mt-5">

                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title float-start"> List</h3>
                        <Link to="/" className="btn btn-sm
                                    btn-success float-end"><i className="fas fa-plus"></i> Back
                        </Link>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="row">
                                <label htmlFor="name" className="col-sm-4 col-form-label">Name</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="name" name="name" value={inputs.name || ''} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <label htmlFor="title" className="col-sm-4 col-form-label">Title</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="title" name="title" value={inputs.title || ''} onChange={handleChange}/>
                                </div>
                            </div>
                                <div className="float-end mt-4">
                                    <button type="submit" onClick={submitForm} className="btn btn-primary text-uppercase"> Update
                                    </button>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTodos;