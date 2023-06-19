import { memo } from "react";
import React from 'react'
const Todos = ({todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todos, index) => {
        return <p key={index}>{todos}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);