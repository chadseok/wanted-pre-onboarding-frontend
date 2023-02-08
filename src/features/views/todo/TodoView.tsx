import React from "react";
import * as styles from "./TodoView.styles";
import { TodoForm, TodoList, useTodoList } from "@/features";

function TodoView() {
  const { todoList, refetch } = useTodoList();

  return (
    <div css={styles.layout}>
      <div css={styles.contentBox}>
        <h1 css={styles.headline}>투두</h1>
        <TodoForm refetch={refetch} />
        <TodoList todoList={todoList} refetch={refetch} />
      </div>
    </div>
  );
}

export default TodoView;
