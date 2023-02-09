import React from "react";
import axiosInstance from "@/services/axios";
import type { TodoItemType } from "./todo-types";

function useTodoList() {
  const [todoList, setTodoList] = React.useState<TodoItemType[]>([]);
  const [trigger, setTrigger] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function getTodos() {
      const res = await axiosInstance.get("/todos");
      setTodoList(res.data.reverse());
    }
    getTodos();
  }, [trigger]);

  const refetch = () => {
    setTrigger(!trigger);
  };
  return { todoList, refetch };
}

export default useTodoList;
