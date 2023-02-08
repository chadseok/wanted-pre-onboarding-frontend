import React from "react";
import * as styles from "./TodoList.styles";
import TodoItem from "./TodoItem";
import type { TodoItemType } from "./TodoItem.types";

function TodoList(props: { todoList: TodoItemType[]; refetch: () => void }) {
  return (
    <ul css={styles.listBox}>
      {props.todoList.map((todo) => (
        <TodoItem key={todo.id} data={todo} refetch={props.refetch} />
      ))}
    </ul>
  );
}

export default TodoList;
