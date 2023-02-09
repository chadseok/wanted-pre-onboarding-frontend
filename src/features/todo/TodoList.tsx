import React from "react";
import { listStyles } from "./todo-styles";
import TodoItem from "./TodoItem";
import type { TodoItemType } from "./todo-types";

function TodoList(props: { todoList: TodoItemType[]; refetch: () => void }) {
  return (
    <ul css={listStyles.listBox}>
      {props.todoList.map((todo) => (
        <TodoItem key={todo.id} data={todo} refetch={props.refetch} />
      ))}
    </ul>
  );
}

export default TodoList;
