import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom";
import Todos from './Components/Todos';
import AddTodos from './Components/AddTodos';
import EditTodos from './Components/EditTodos';

function App() {
  return (
    <div className="App">
      {/*<h3 className="mt-5">hasdfsd asdf</h3>*/}


        <Routes>
                <Route exact path="/" element={<Todos/>} />
                <Route path='/add-todos' element={<AddTodos/>} />
                <Route path='/edit-todo/:id' element={<EditTodos/>} />
        </Routes>


    </div>
  );
}

export default App;
