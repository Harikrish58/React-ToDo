import React, { useState } from "react";

const Input = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title && description){
        addTodo(title, description);
    setTitle("");
    setDescription("");
    }
    else{
        alert("Input fieldes cannot be emplty")
    }
    }
    
  return (
    <div className="input">
      <input
        type="text"
        value={title}
        placeholder="Todo name"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        placeholder="Todo description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleSubmit} >Add todo</button>
    </div>
  );
};

export default Input;
