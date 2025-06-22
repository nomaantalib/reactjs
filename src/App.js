import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AddTodo } from "./myComponents/AddTodo";
import { Footer } from "./myComponents/footer";
import Header from "./myComponents/header";
import { Login } from "./myComponents/Login";
import { Todos } from "./myComponents/todos";

function App() {
  const [lastDeleted, setLastDeleted] = useState(null);
  const [showAddTodo, setShowAddTodo] = useState(false);

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setLastDeleted(todo);
    setTodos(todos.filter((e) => e.id !== todo.id));
  };

  const onMark = (todo) => {
    console.log("I am onMark of todo", todo);
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          t.completed = !t.completed;
        }
        return t;
      })
    );
  };

  const addTodo = (title, desc) => {
    const newTodo = {
      id: new Date().getTime(), // Using timestamp for a unique ID
      title: title,
      desc: desc,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const undoDelete = () => {
    if (lastDeleted) {
      setTodos([...todos, lastDeleted]);
      setLastDeleted(null);
    }
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to the market",
      desc: "Buy vegetables and fruits.",
      completed: false,
    },
    {
      id: 2,
      title: "Complete React project",
      desc: "Finish the to-do list app.",
      completed: false,
    },
    {
      id: 3,
      title: "Read a book",
      desc: "Read 'The Alchemist'.",
      completed: false,
    },
  ]);
  return (
    <>
      <Header title="My To-Do App" searchBar={true} undoDelete={undoDelete} />
      <div className="task-counter">Total Tasks: {todos.length}</div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <div className="container">
              <button
                className="btn btn-danger my-3"
                onClick={() => setShowAddTodo(!showAddTodo)}
              >
                Add new task
              </button>
              {showAddTodo && <AddTodo addTodo={addTodo} />}
              <Todos Todos={todos} onDelete={onDelete} onMark={onMark} />
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
