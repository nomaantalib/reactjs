import "./App.css";
import { Footer } from "./myComponents/footer";
import Header from "./myComponents/header";
import { Todos } from "./myComponents/todos";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "Buy vegetables and fruits.",
    },
    {
      sno: 2,
      title: "Complete React project",
      desc: "Finish the to-do list app.",
    },
    {
      sno: 3,
      title: "Read a book",
      desc: "Read 'The Alchemist'.",
    },
  ];
  return (
    <>
      <Header title="My To-Do App" searchBar={true} />
      <Todos Todos={todos} />
      <Footer />
    </>
  );
}

export default App;
