export const Todo = ({ todo, onDelete, onMark }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <h4>
        &bull; {todo.title}
        {todo.completed && <span className="completed-icon">✓</span>}
      </h4>
      <p>Description :-{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>
        Delete
      </button>
      <br />
      <button className="btn btn-sm btn-light" onClick={() => onMark(todo)}>
        Mark as complete
      </button>
    </div>
  );
};
