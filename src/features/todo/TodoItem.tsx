import React from "react";
import { itemStyles } from "./todo-styles";
import type { TodoItemType } from "./todo-types";
import { updateTodoApi, deleteTodoApi } from "./todo-api";
import { SlTrash } from "react-icons/sl";
import { VscEdit } from "react-icons/vsc";

function TodoItem(props: { data: TodoItemType; refetch: () => void }) {
  const [todoData, setTodoData] = React.useState<TodoItemType>(props.data);
  const [newTodoText, setNewTodoText] = React.useState<string>(props.data.todo);
  const [editMode, setEditMode] = React.useState<boolean>(false);

  const toggleCheckBox = async () => {
    const res = await updateTodoApi({
      ...todoData,
      isCompleted: !todoData.isCompleted,
    });

    setTodoData(res.data);
  };

  const enterEditMode = () => {
    setEditMode(true);
  };

  const editTodoText = (nextStep: "submit" | "cancel") => async () => {
    if (nextStep === "cancel") {
      setNewTodoText(todoData.todo);
    } else {
      const res = await updateTodoApi({ ...todoData, todo: newTodoText });
      setTodoData(res.data);
    }

    setEditMode(false);
  };

  const deleteTodo = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
      await deleteTodoApi(todoData.id);
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
          onClick={toggleCheckBox}
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
          <button data-testid="cancel-button" onClick={editTodoText("cancel")}>
            취소
          </button>
          <button data-testid="submit-button" onClick={editTodoText("submit")}>
            수정
          </button>
        </div>
      ) : (
        <div css={itemStyles.btnBox}>
          <button data-testid="modify-button" onClick={enterEditMode}>
            <VscEdit />
          </button>
          <button data-testid="delete-button" onClick={deleteTodo}>
            <SlTrash />
          </button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
