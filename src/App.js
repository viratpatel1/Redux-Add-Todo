import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './Action/TodoAction';
import './App.css';

function App()
{
  const dispatch = useDispatch()
  const [todo, setTodo] = useState();
  const Todo = useSelector(state => state.Todo)
  const { todos } = Todo;
  const Submit = (e) =>
  {
    e.preventDefault()
    console.log(todo)
    dispatch(AddTodoAction(todo))
  }

  const Delete = (data) =>
  {
    dispatch(RemoveTodoAction(data))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo App</h2>
        <form onSubmit={Submit} >
          <input type="text" onChange={(e) => setTodo(e.target.value)} placeholder="Enter a TODO" />
          <button style={{ margin: "0 0 0 10px" }}>Add</button>
        </form>
        <ul className="AllDo">
          {todos && todos.map((data) =>
          {
            return (
              <div>
                <li key={data.id} className="singleTodo">
                  <span>{data.todo}</span>
                  <button style={{ color: "white", background: "red" }} onClick={(() => Delete(data))}>Delete</button>
                </li>

              </div>
            )
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
