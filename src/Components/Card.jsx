import React, { useState } from "react";

const Card = ({ element, deleteTodo, editTodo, updateTodo }) => {
  const [editData, setEditData] = useState(false);
  const [editedTitle, setEditedTitle] = useState(element.title);
  const [editedDesc, setEditedDesc] = useState(element.description);

  const handleEditsave = () => {
    if (editedTitle && editedDesc) {
      editTodo(element.id, editedTitle, editedDesc);
      setEditData(false);
    } else {
      alert("Title and Description cannot be empty");
    }
  };

  return (
    <div key={element.id} className="col-12 col-sm-6 col-md-6 col-lg-4">
      {editData ? (
        <div className="card">
          <div className="card-body">
            <p className="card-text">Todo ID:{element.id}</p>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="Edit title"
            />
            <input
              type="text"
              value={editedDesc}
              onChange={(e) => setEditedDesc(e.target.value)}
              placeholder="Edit description"
            />
            <button className="btn btn-success" onClick={handleEditsave}>
              Save
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setEditData(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <p className="card-text">Todo ID: {element.id}</p>
            <p className="card-text">Title: {element.title}</p>
            <p className="card-text">Description: {element.description}</p>
            <div className="status">
              {/* Status: {element.completed ? "Completed" : "Not Completed"} */}
              <select
                value={element.completed}
                onChange={(e) =>
                  updateTodo(element.id, e.target.value === "true")
                }
              >
                <option value={true}>Completed</option>
                <option value={false}>Not Completed</option>
              </select>
            </div>
            <div className="button">
              <button
                className="btn btn-success"
                onClick={() => setEditData(true)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(element.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
