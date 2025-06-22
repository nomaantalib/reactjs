import { Todo } from "./todo";

export const Todos = ({ Todos, onDelete, onMark }) => {
  return (
    <div className="container">
      <h2 className="text-center my-3">To-Dos List </h2>
      {Todos.length === 0
        ? "No todos to display"
        : Todos.map((todo) => {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                onDelete={onDelete}
                onMark={onMark}
              />
            );
          })}
    </div>
  );
};
