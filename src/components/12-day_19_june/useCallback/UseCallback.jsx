import React from "react";
import Todos from "./Todos";
import { useState } from "react";
import { useCallback } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((count) => count + 1);
  };  
  // eslint-disable-next-line
  const addTodo = useCallback(() => {
    setTodos((todos) => [todos, "parth"]);
  });
  // const addTodo = () => {
  //   setTodos((todos) => [todos, "New Todo"]);
  // };
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
