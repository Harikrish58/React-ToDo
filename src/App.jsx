import React, { useState } from "react";
import Input from "./Components/Input";
import Card from "./Components/Card";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");
  const addTodo = (newTitle, newDesc) => {
    let data = {
      id: todo.length + 1,
      title: newTitle,
      description: newDesc,
      completed: false,
    };
    // console.log("Added todo:", data);
    setTodo([...todo, data]);
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((ele) => ele.id !== id));
  };

  const editTodo = (id, updatedTitle, updatedDescription) => {
    setTodo(
      todo.map((ele) =>
        ele.id === id
          ? { ...ele, title: updatedTitle, description: updatedDescription }
          : ele
      )
    );
  };

  const updateTodo = (id, completed) => {
    setTodo(todo.map((ele) => (ele.id === id ? { ...ele, completed } : ele)));
  };

  const filterTodos = todo.filter((ele) => {
    switch (filter.toLowerCase()) {
      case "all":
        return true;
      case "completed":
        return ele.completed === true;
      case "not completed":
        return ele.completed === false;
      default:
        return true;
    }
  });

  return (
    <div>
      <h1>To Do</h1>
      <Input addTodo={addTodo} />
      <div>
        <div className="filter-container">
          <h2>To Do's</h2>
          <div>
            <label htmlFor="statusFilter">Filter by status:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Completed">Completed</option>
              <option value="Not completed">Not completed</option>
            </select>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {filterTodos.map((element) => {
              return (
                <Card
                  key={element.id}
                  element={element}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  updateTodo={updateTodo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
