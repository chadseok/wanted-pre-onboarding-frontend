import axiosInstance from "@/services/axios";
import { TodoItemType } from "./todo-types";

export const getTodosApi = () => {
  return axiosInstance.get("/todos");
};

export const createTodoApi = (todo: string) => {
  return axiosInstance.post("/todos", { todo });
};

export const updateTodoApi = (updatedTodoData: TodoItemType) => {
  return axiosInstance.put(`/todos/${updatedTodoData.id}`, updatedTodoData);
};

export const deleteTodoApi = (id: number) => {
  return axiosInstance.delete(`/todos/${id}`);
};
