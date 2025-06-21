export const Todo = ({ todo }) => {
  return (
    <div>
      <h4>
        {todo.sno} :- {todo.title}
      </h4>
      <p>Description :-{todo.desc}</p>
      <button className="btn btn-sm btn-danger">Delete</button>
      <br />
      <button className="btn btn-sm btn-light">Mark as complete</button>
    </div>
  );
};
