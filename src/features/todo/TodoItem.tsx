import React from "react";
import { itemStyles } from "./todo-styles";
import type { TodoItemType } from "./todo-types";
import axiosInstance from "@/services/axios";
import { SlTrash } from "react-icons/sl";
import { VscEdit } from "react-icons/vsc";

function TodoItem(props: { data: TodoItemType; refetch: () => void }) {
  const [todoData, setTodoData] = React.useState<TodoItemType>(props.data);
  const [newTodoText, setNewTodoText] = React.useState<string>(props.data.todo);
  const [editMode, setEditMode] = React.useState<boolean>(false);

  const handleChecked = async () => {
    const res = await axiosInstance.put(`/todos/${todoData.id}`, {
      todo: todoData.todo,
      isCompleted: !todoData.isCompleted,
    });

    setTodoData(res.data);
  };

  const handleEditTodo = async () => {
    const res = await axiosInstance.put(`/todos/${todoData.id}`, {
      todo: newTodoText,
      isCompleted: todoData.isCompleted,
    });

    setTodoData(res.data);
    setEditMode(false);
  };

  const handleDeleteTodo = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
      await axiosInstance.delete(`/todos/${todoData.id}`);
    }

    props.refetch();
  };

  return (
    <li
      css={
        todoData.isCompleted ? itemStyles.itemBoxChecked : itemStyles.itemBox
      }
    >
      <label htmlFor="todo">
        <input
          css={itemStyles.checkbox}
          name="todo"
          type="checkbox"
          onClick={handleChecked}
          defaultChecked={todoData.isCompleted}
        />
        {editMode ? (
          <input
            data-testid="modify-input"
            css={itemStyles.editInput}
            autoFocus
            value={newTodoText}
            onChange={(e) => {
              setNewTodoText(e.target.value);
            }}
          />
        ) : (
          <span css={itemStyles.content}>{todoData.todo}</span>
        )}
      </label>
      {editMode ? (
        <div css={itemStyles.btnBox}>
          <button
            data-testid="cancel-button"
            onClick={() => {
              setEditMode(false);
              setNewTodoText(todoData.todo);
            }}
          >
            취소
          </button>
          <button data-testid="submit-button" onClick={handleEditTodo}>
            수정
          </button>
        </div>
      ) : (
        <div css={itemStyles.btnBox}>
          <button data-testid="modify-button" onClick={() => setEditMode(true)}>
            <VscEdit />
          </button>
          <button data-testid="delete-button" onClick={handleDeleteTodo}>
            <SlTrash />
          </button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
