import React from "react";
import * as styles from "./TodoForm.styles";
import { BsPencilFill } from "react-icons/bs";
import axiosInstance from "@/services/axios";

function TodoForm(props: { refetch: () => void }) {
  const [todoText, setTodoText] = React.useState<string>("");

  const createTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axiosInstance.post("/todos", { todo: todoText });
    setTodoText("");
    props.refetch();
  };

  return (
    <form css={styles.formBox} onSubmit={createTodo}>
      <input
        data-testid="new-todo-input"
        css={styles.input}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        css={styles.submitBtn}
        type="submit"
        data-testid="new-todo-add-button"
      >
        <BsPencilFill fill="white" />
      </button>
    </form>
  );
}

export default TodoForm;
