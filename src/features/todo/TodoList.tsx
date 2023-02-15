import React from "react";
import { listStyles } from "./todo-styles";
import TodoItem from "./TodoItem";
import { TodoContext } from "./TodoContextProvider";

function TodoList() {
  const { todoList } = React.useContext(TodoContext);

  return (
    <ul css={listStyles.listBox}>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} data={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
