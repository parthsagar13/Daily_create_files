import React from 'react'
import Todos from './Todos';
import { useState } from 'react';
import { useCallback } from 'react';

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((todos) => [todos, "New Todo"]);
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
  )
}
