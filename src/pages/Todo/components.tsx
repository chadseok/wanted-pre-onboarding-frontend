import React from "react";
import * as styles from "./styles";
import { TodoForm, TodoList, TodoContextProvider } from "@/features";

function Todo(props: { children: React.ReactNode }) {
  return (
    <div css={styles.layout}>
      <div css={styles.contentBox}>{props.children}</div>
    </div>
  );
}

function Headline() {
  return <h1 css={styles.headline}>투두</h1>;
}

Todo.Headline = Headline;
Todo.ContextProvider = TodoContextProvider;
Todo.Form = TodoForm;
Todo.List = TodoList;

export default Todo;
