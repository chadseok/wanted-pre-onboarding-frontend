import React from "react";
import * as styles from "./styles";
import { TodoForm, TodoList, useTodoList } from "@/features";
import STORAGE from "@/constants/storage";
import { Navigate } from "react-router-dom";

function Todo() {
  const { todoList, refetch } = useTodoList();
  const token = localStorage.getItem(STORAGE.authToken);
  if (!token) return <Navigate replace to="/signin" />;

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

export default Todo;
