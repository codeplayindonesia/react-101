import "./App.css";
import { useState } from 'react';

function App() {
  // let page = "home";
  // const todos = ["lari pagi", "latihan logic", "sepedehan"];
  // State: remember last value from the component
  const [page, setPage] = useState("home")
  const [newTodo, setNewTodo] = useState('coba isi')
  const [todos, setTodos] = useState(["lari pagi", "latihan logic", "sepedehan"])

  let content = null;
  if (page === "home") {
    const listTodos = todos.map((x, index) => (
      <li key={index} className="list-group-item">{x}</li>
    ));
    content = (
      <div>
        {/* Home Page */}
        <div>
          <button
            onClick={() => {
              // console.log({page})
              // page = "add";
              // console.log({page})

              setPage('add')
            }}
            className="btn btn-primary float-end"
          >
            Add Todo
          </button>
          <h1>Todo List</h1>
        </div>
        <ul className="list-group">{listTodos}</ul>
      </div>
    );
  } else {
    content = (
      <div>
        {/* Add Todo Page */}
        <h1>Add Todo</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Write your new todo here"
            value={newTodo}
            onChange={(event) => {
              console.log(event)
              setNewTodo(event.target.value)
            }}
          />
          <button onClick={() => {
            console.log(newTodo, "<< new todo")
            setTodos([
              ...todos,
              newTodo
            ])
            setNewTodo('')
            setPage('home')
          }} className="btn btn-primary">Add</button>
        </div>
      </div>
    );
  }

  // { true ? 'yes' : 'no' }
  // true && 'yes'
  return <div className="container">{content}</div>;
}

export default App;
