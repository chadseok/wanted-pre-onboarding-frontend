import React from "react";
import { BsPencilFill } from "react-icons/bs";
import { formStyles } from "./todo-styles";
import { createTodoApi } from "./todo-api";
import { TodoContext } from "./TodoContextProvider";

function TodoForm() {
  const { todoList, setTodoList } = React.useContext(TodoContext);
  const [todoText, setTodoText] = React.useState<string>("");

  const createTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await createTodoApi(todoText);
    setTodoText("");
    setTodoList([res.data, ...todoList]);
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
