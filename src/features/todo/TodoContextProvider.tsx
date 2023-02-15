import React from "react";
import { getTodosApi } from "./todo-api";
import type { TodoItemType } from "./todo-types";

export const TodoContext = React.createContext<{
  todoList: TodoItemType[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
}>({
  todoList: [],
  setTodoList: () => {},
});

function TodoContextProvider(props: { children: React.ReactNode }) {
  const [todoList, setTodoList] = React.useState<TodoItemType[]>([]);

  React.useEffect(() => {
    async function getTodos() {
      const res = await getTodosApi();
      setTodoList(res.data.reverse());
    }
    getTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
