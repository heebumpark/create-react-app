import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";

function App() {
  const [toDo, SetTodo] = useState("");
  const [toDos, SetToDos] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    SetToDos((currentArray) => [toDo, ...currentArray]);
    SetTodo("");
    console.log(toDos);
  };
  const onChange = (event) => SetTodo(event.target.value);
  console.log(toDo);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write something"
        />
        <button> Add TO Do </button>
      </form>
      <hr />
      {toDos.map((str, index) => (
        <li key={index}>{str}</li>
      ))}
    </div>
  );
}

export default App;
