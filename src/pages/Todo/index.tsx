import React from "react";
import Todo from "./components";

function TodoLayout() {
  return (
    <Todo>
      <Todo.Headline />
      <Todo.ContextProvider>
        <Todo.Form />
        <Todo.List />
      </Todo.ContextProvider>
    </Todo>
  );
}

export default TodoLayout;
