import React from "react";
import { formStyles } from "./todo-styles";
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
    <form css={formStyles.wrapper} onSubmit={createTodo}>
      <input
        data-testid="new-todo-input"
        css={formStyles.newTodo}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        css={formStyles.submit}
        type="submit"
        data-testid="new-todo-add-button"
      >
        <BsPencilFill fill="white" />
      </button>
    </form>
  );
}

export default TodoForm;
