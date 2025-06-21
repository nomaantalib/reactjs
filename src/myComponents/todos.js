import { Todo } from "./todo";

export const Todos = (props) => {
  return (
    <div className="container">
      <h2>To-Dos List :</h2>
      <Todo todo={props.Todos[0]} />
    </div>
  );
};
